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

// (function () {
//     'use strict';
//     $(document).ready(function () {
//         let cssBlack =  {'width':'5vw', 'height':'5vw', 'background':'black', 'display':'inline-block'};
//         let cssWhite = {'width':'5vw', 'height':'5vw', 'background':'white', 'display':'inline-block'};
//
//         let mon_click = function () {
//             alert('test !')
//         };
//
//         for (let y = 0 ; y < 8 ; ++y){
//             let ligne = $('<div></div>');
//             $('#damier').append(ligne);
//             for (let x = 0 ; x < 8 ; ++x){
//                 ligne.append(
//                     $('<div></div>')
//                         .css((x+y) % 2 ? cssBlack : cssWhite)
//                         .append('&nbsp;')
//                         .mouseenter(function () {
//                             $(this).css({'background' : 'blue'});
//                         })
//                         .mouseleave(function () {
//                             $(this).css((x+y) % 2 ? {'background' : 'black'} : {'background' : 'white'});
//                         })
//                 );
//             }
//         }
//
//     });
// })();

(function () {
    'use strict';

    let cssBlack =  {'width':'5vw', 'height':'5vw', 'background':'black', 'display':'inline-block'};
    let cssWhite = {'width':'5vw', 'height':'5vw', 'background':'white', 'display':'inline-block'};

    /*  Version Class moderne  */
    class MonDamier {
        constructor() {
        }

        mybuild (longueur, largeur, endroit) {
            for (let y = 0 ; y < largeur ; ++y) {
                let ligne = $('<div></div>');
                $(endroit).append(ligne);
                for (let x = 0; x < longueur; ++x) {
                    ligne.append(
                        $('<div></div>')
                            .css((x + y) % 2 ? cssBlack : cssWhite)
                            .append('&nbsp;')
                            .mouseenter(function () {
                                $(this).css({'background': 'blue'});
                            })
                            .mouseleave(function () {
                                $(this).css((x + y) % 2 ? {'background': 'black'} : {'background': 'white'});
                            })
                    );
                }
            }
        }
    }

    /*  Version Class ancienne  */

    let Damier = function (longueur, largeur, endroit) {

        this.build  = function () {
            for (let y = 0 ; y < largeur ; ++y) {
                let ligne = $('<div></div>');
                $(endroit).append(ligne);
                for (let x = 0; x < longueur; ++x) {
                    ligne.append(
                        $('<div></div>')
                            .css((x + y) % 2 ? cssBlack : cssWhite)
                            .append('&nbsp;')
                            .mouseenter(function () {
                                $(this).css({'background': 'blue'});
                            })
                            .mouseleave(function () {
                                $(this).css((x + y) % 2 ? {'background': 'black'} : {'background': 'white'});
                            })
                    );
                }
            }
        }

    };

    $(document).ready(function () {
        // let monDamier = new Damier(8, 8,'#damier');
        // monDamier.build();

        let monDamier = new MonDamier();
        monDamier.mybuild(8, 8,'#damier');
    });
})();