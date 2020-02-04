(function () {
    'use strict';

    let cssBlack =  {'background':'black'};
    let cssWhite = {'background':'white'};
    let cssToken = {'color': 'red'};

    class MonDamier {
        constructor() {
            this.currentPlayer = 1;
            this.tab = [[undefined,undefined,undefined], [undefined,undefined,undefined], [undefined,undefined,undefined]];
        }

        build (longueur, largeur, endroit) {
            for (let y = 0 ; y < largeur ; ++y) {
                let ligne = $('<div></div>');
                $(endroit).append(ligne);
                for (let x = 0; x < longueur; ++x) {
                    ligne.append(
                        $('<div class="case"></div>')
                            .data('parent', this)
                            .css((x + y) % 2 ? cssBlack : cssWhite)
                            .append('&nbsp;')
                            .click(function () {

                                if ($(this).data('clicked') === 1) {
                                    $('#message').html('<p>Case déjà cliquée !</p>').css({'color': 'red'});
                                    return;
                                }
                                else {
                                    $(this).data('clicked', 1);
                                    $(this).data('x-coord', x);
                                    $(this).data('y-coord', y);
                                    $(this).data('parent').fillTab($(this));
                                }

                                $(this).data('parent').changeToken($(this));
                                $(this).data('parent').victory($(this));
                                $(this).data('parent').changePlayer();
                            })
                    );
                }
            }
        }

        changePlayer(){
            if (this.currentPlayer === 1) {
                $('#message').html('<p>Joueur 2 à toi de jouer</p>').css({'color': 'blue'});
                this.currentPlayer = 2;
            }
            else {
                $('#message').html('<p>Joueur 1 à toi de jouer</p>').css({'color': 'blue'});
                this.currentPlayer = 1;
            }
        }

        changeToken(cell) {
            if (this.currentPlayer === 1) {
                cell.html('<p>X</p>').css(cssToken);
            }
            else {
                cell.html('<p>O</p>').css(cssToken);
            }
        }

        fillTab(cell) {
            this.tab[cell.data('y-coord')][cell.data('x-coord')] = this.currentPlayer;
            console.log(this.tab);
        }

        victory(cell) {
            if ((this.tab[0][cell.data('x-coord')] == this.tab[1][cell.data('x-coord')] == this.tab[2][cell.data('x-coord')]) && this.tab[0][cell.data('x-coord')] != undefined) {
                alert('Joueur ' + this.currentPlayer + ' a gagné !');
            } else if ((this.tab[cell.data('y-coord')][0] == this.tab[cell.data('y-coord')][1] == this.tab[cell.data('y-coord')][2]) && this.tab[cell.data('y-coord')][0] != undefined) {
                alert('Joueur ' + this.currentPlayer + ' a gagné !');
                return;
            }
        }
    }

    $(document).ready(function () {

        let monDamier = new MonDamier();
        monDamier.build(3,3,'#damier');
    });
})();