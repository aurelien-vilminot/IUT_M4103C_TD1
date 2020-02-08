(function () {
    'use strict';

    let cssBlack =  {'background':'black'};
    let cssWhite = {'background':'white'};
    let cssToken = {'color': 'red'};

    class MonDamier {
        constructor(longueur, largeur) {
            this.currentPlayer = undefined;
            this.longueur = longueur;
            this.largeur = largeur;
            this.tab = [];
            for (let y = 0 ; y < this.longueur ; ++y) {
                this.tab[y] = [];
                for (let x = 0 ; x < this.largeur ; ++x) {
                    this.tab[y][x] = undefined;
                }
            }
        } // constructor()

        build (endroit) {
            this.changePlayer();
            for (let y = 0 ; y < this.largeur ; ++y) {
                let ligne = $('<div></div>');
                $(endroit).append(ligne);
                for (let x = 0; x < this.longueur; ++x) {
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
                                    $(this).data('parent').fillCell($(this));
                                }

                                $(this).data('parent').changeToken($(this));
                                if ($(this).data('parent').victory($(this))) {
                                    location.reload();
                                }
                                $(this).data('parent').changePlayer();
                            })
                    );
                }
            }
        } // build()

        changePlayer(){
            if (this.currentPlayer === 1) {
                $('#message').html('<p>Joueur 2 à toi de jouer</p>').css({'color': 'blue'});
                this.currentPlayer = 2;
            }
            else if (this.currentPlayer === 2 || this.currentPlayer === undefined) {
                $('#message').html('<p>Joueur 1 à toi de jouer</p>').css({'color': 'blue'});
                this.currentPlayer = 1;
            }
        } // changePlayer()

        changeToken(cell) {
            if (this.currentPlayer === 1) {
                cell.html('<p>X</p>').css(cssToken);
            }
            else {
                cell.html('<p>O</p>').css(cssToken);
            }
        } // changeToken()

        fillCell(cell) {
            this.tab[cell.data('x-coord')][cell.data('y-coord')] = this.currentPlayer;
        } // fillCell()

        victory(cell) {
            let x = 0;
            let y = 0;
            let casesAreEqual = true;

            while (x < this.longueur && casesAreEqual) {
                if (x === 0) {
                    var tempCaseX = this.tab[x][cell.data('y-coord')];
                }
                else {
                    if (this.tab[x][cell.data('y-coord')] !== tempCaseX) {
                        casesAreEqual = false;
                    }
                    else {
                        tempCaseX = this.tab[x][cell.data('y-coord')];
                    }
                }
                x += 1;
            }

            if (casesAreEqual) {
                alert('Joueur ' + this.currentPlayer + ' a gagné en colonne !');
                return true;
            }
            else {
                casesAreEqual = true;
                while (y < this.largeur && casesAreEqual) {
                    if (y === 0) {
                        var tempCaseY = this.tab[cell.data('x-coord')][y];
                    } else {
                        if (this.tab[cell.data('x-coord')][y] !== tempCaseY) {
                            casesAreEqual = false;
                        } else {
                            tempCaseY = this.tab[cell.data('x-coord')][y];
                        }
                    }
                    y += 1;
                }
            }
            if (casesAreEqual) {
                alert('Joueur ' + this.currentPlayer + ' a gagné en ligne !');
                return true;
            }
        } // victory()
    } // MonDamier

    $(document).ready(function () {

        let monDamier = new MonDamier(3,3);
        monDamier.build('#damier');
    });
})();