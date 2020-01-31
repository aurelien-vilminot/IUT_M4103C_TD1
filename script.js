// (function () {
//     alert('coucou');
// }) ();

// (function() {
//     $(document).ready(function () {
//         $('#monelement').fadeOut(2000);
//     });
// }) ();

// (function() {
//     $(document).ready(function () {
//         $('.important').fadeOut(2000);
//     });
// }) ();

(function() {
    $(document).ready(function () {

        for (let i = 0 ; i < 10 ; i++)
        {
            let maCaseColonne = $('<div>&nbsp;</div>').css({'background': 'blue', 'width' : '100%', 'height' : '4vw', 'border' : 'solid', 'display' : 'flex'});
            $('#damier').append(maCaseColonne);
            for (let j = 0 ; j < 10 ; j++)
            {
                let maCaseLigne = $('<div>&nbsp;</div>').css({'background': 'blue', 'width' : '4vw', 'height' : '4vw', 'border' : 'solid', 'display' : 'flex', 'flex-direction' : 'column'});
                $(maCaseColonne).append(maCaseLigne);
            }
        }

    });
}) ();