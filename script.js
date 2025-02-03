$(document).ready(function(){
    
    const searchInput = $('#search-input');
    const resultArtists = $('#result-artist');
    const resultPlaylists = $('#result-playlists');

    function requestApi(searchValue){
        const url = `http://localhost:3000/artists?name_like=${searchValue}`;

        fetch(url)
            .then((response) => response.json())
            .then((result) => displayResults(result));
    };

    function displayResults(result){
        resultPlaylists.addClass('hidden');

        const artistName = $('#artist-name');
        const artistImage = $('#artist-img');

        $.each(result, function(index, element){
            artistName.text(element.name);
            artistImage.attr('src', element.urlImg);
        });

        resultArtists.removeClass('hidden');
    };

    $(document).on('input', ()=>{
        const searchValue = searchInput.val().toLowerCase();

        if(searchValue === ''){
            resultPlaylists.removeClass('hidden');
            resultArtists.addClass('hidden');
            return;
        };

        requestApi(searchValue);
        
    });
});