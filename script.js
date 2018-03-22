$(document).ready(function() {
    var urlToCountires = 'https://restcountries.eu/rest/v2/name/';
    var countriesList = $('#countries');

    $('#search').click(searchCountries);

    function searchCountries() {
        var countryName = $('#country-name').val();
        if (!countryName.length) {
            countryName = 'Poland';
        }
        $.ajax({
            url: urlToCountires + countryName,
            success: function (res) {
            	showCountries(res);
            }
        }); //end of request

    } // end of searchCountries
    function showCountries(res) {
        countriesList.empty();
        $(res).each(function(index, el) {
            var country = $('<li>').addClass('country');
            var countryHeader = $('<div>').addClass('countryHeader');
            var flag = $('<img>').attr('src', el.flag).addClass('flag');
            var countryDescription = $('<div>').addClass('countryDescription')
            var countryName = $('<h3>').addClass('country-name').text(el.name);
            var capital = $('<h4>').addClass('capital').text('Capital: ' + el.capital);
            var code = $('<h4>').addClass('alphaCode').text('Code: ' + el.alpha3Code);
            var subregion = $('<h4>').addClass('subregion').text('Subregion: ' + el.subregion);
            var currency = $('<h4>').addClass('currency').text('Currency: ' + el.currencies[0].name);
            var population = $('<h4>').addClass('population').text('Population: ' + el.population + ' pepople');
            var domain = $('<h4>').addClass('domain').text('Domain: example' + el.topLevelDomain[0]);
            var area = $('<h4>').addClass('area').html('Area: ' + el.area + ' km' + '<sup>2</sup>');
            countryHeader.append(countryName).append(flag);
            countryDescription.append(capital).append(subregion).append(code).append(currency).append(population).append(area).append(domain);
            country.append(countryHeader).append(countryDescription);
            countriesList.append(country);
        }); //end of for each response
    } //end of showCountries
}); // end of doc ready