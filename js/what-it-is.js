var Hotkeys = /*#__PURE__*/function () {
    function Hotkeys() {
      _classCallCheck(this, Hotkeys);
  
      this.currentItem = -1;
      this.buttons = document.querySelectorAll('.main-menu .menu-button ');
    }
  
    _createClass(Hotkeys, [{
      key: "init",
      value: function init() {
        this.currentItem = -1;
        var main = document.querySelector('.main');
        main.focus();
      }
    }, {
      key: "setMenuHandler",
      value: function setMenuHandler() {
        this.bindedMenuEventHandler = this.menuEventHandler.bind(this);
        document.addEventListener('keydown', this.bindedMenuEventHandler, false);
      }
    }, {
      key: "removeMenuHandler",
      value: function removeMenuHandler() {
        document.removeEventListener('keydown', this.bindedMenuEventHandler, false);
      }
    }, {
      key: "setGameHandler",
      value: function setGameHandler() {
        this.bindedGameEventHandler = this.gameEventHandler.bind(this);
        document.addEventListener('keydown', this.bindedGameEventHandler);
      }
    }, {
      key: "removeGameHandler",
      value: function removeGameHandler() {
        document.removeEventListener('keydown', this.bindedGameEventHandler);
      }
    }, {
      key: "menuEventHandler",
      value: function menuEventHandler(e) {
        var _this = this;
  
        var menuPressUpKey = function menuPressUpKey() {
          _this.currentItem -= 1;
  
          if (_this.currentItem < 0) {
            _this.currentItem = _this.buttons.length - 1;
          }
  
          _this.disableActiveMenuButtons();
  
          _this.setActiveMenuButton();
        };
  
        var menuPressDownKey = function menuPressDownKey() {
          _this.currentItem += 1;
  
          if (_this.currentItem === _this.buttons.length) {
            _this.currentItem = 0;
          }
  
          _this.disableActiveMenuButtons();
  
          _this.setActiveMenuButton();
        };
  
        var openActiveMenu = function openActiveMenu() {
          switch (_this.currentItem) {
            case 0:
              _this.removeMenuHandler();
  
              _utils_MenuUtils__WEBPACK_IMPORTED_MODULE_0__.default.pressButtonStart();
              break;
  
            case 1:
              _utils_MenuUtils__WEBPACK_IMPORTED_MODULE_0__.default.pressButtonSettings();
              break;
  
            case 2:
              _utils_MenuUtils__WEBPACK_IMPORTED_MODULE_0__.default.pressButtonTutorial();
              break;
  
            case 3:
              _utils_MenuUtils__WEBPACK_IMPORTED_MODULE_0__.default.pressButtonResult();
              break;
  
            default:
              break;
          }
        };
  
        var goToMainMenu = function goToMainMenu() {
          document.querySelectorAll('.menu .section-menu').forEach(function (item) {
            var section = item;
            section.classList.add('hide-menu');
          });
          document.querySelector('.main-menu').classList.remove('hide-menu');
        };
  
        var buttonCode = e.code;
        var mainMenu = document.querySelector('.main-menu.hide-menu');
        if (e.stopPropagation) e.stopPropagation();
  
        switch (buttonCode) {
          case 'Enter':
          case 'Space':
            if (!mainMenu) openActiveMenu();
            break;
  
          case 'Escape':
            goToMainMenu();
            break;
  
          case 'ArrowUp':
            if (!mainMenu) {
              menuPressUpKey();
            }
  
            break;
  
          case 'ArrowDown':
            if (!mainMenu) {
              menuPressDownKey();
            }
  
            break;
  
          default:
            break;
        }
      }
    }, {
      key: "disableActiveMenuButtons",
      value: function disableActiveMenuButtons() {
        this.buttons.forEach(function (button) {
          var currentButton = button;
          currentButton.dataset.activeMenuItem = false;
        });
      }
    }, {
      key: "setActiveMenuButton",
      value: function setActiveMenuButton() {
        var button = this.buttons[this.currentItem];
  
        if (button) {
          button.dataset.activeMenuItem = true;
        }
      }
    }, {
      key: "setUpGameButton",
      value: function setUpGameButton(func) {
        this.upGameButton = func;
      }
    }, {
      key: "setDownGameButton",
      value: function setDownGameButton(func) {
        this.downGameButton = func;
      }
    }, {
      key: "setEscGameButton",
      value: function setEscGameButton(func) {
        this.escGameButton = func;
      }
    }, {
      key: "gameEventHandler",
      value: function gameEventHandler(e) {
        var buttonCode = e.code;
        if (e.stopPropagation) e.stopPropagation();
  
        switch (buttonCode) {
          case 'Enter':
          case 'Space':
          case 'ArrowUp':
            if (typeof this.upGameButton() === 'function') {
              this.upGameButton();
            }
  
            break;
  
          case 'ArrowDown':
            if (typeof this.downGameButton() === 'function') this.downGameButton();
            break;
  
          case 'Escape':
            if (typeof this.escGameButton() === 'function') this.escGameButton();
            break;
  
          default:
            break;
        }
      }
    }]);
  
    return Hotkeys;
  }();

  
  var Commands = /*#__PURE__*/function () {
    function Commands() {
      _classCallCheck(this, Commands);
  
      this.addTeams = document.querySelector('.add-teams');
      this.teamsList = document.querySelector('.teams');
      this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
      this.items = JSON.parse(localStorage.getItem('items')) || [];
      this.button = document.querySelectorAll('button');
      this.backMenuButton = document.querySelector('.button-backmenu-menu');
      this.startGameButton = document.querySelector('.button-startgame-play');
      this.adjective = ['Космические', 'Всезнающие', 'Веселые', 'Крутые', 'Плохие', 'Летающие', 'Злобные', 'Колючие', 'Опасные', 'Черные', 'Белые'];
      this.engAdjective = ['Cosmic', 'Wisdom', 'Funny', 'Cool', 'Bad', 'Flying', 'Spiteful', 'Thorny', 'Dangerous', 'Black', 'White'];
      this.race = ['Помидоры', 'Бакланы', 'Медведи', 'Котики', 'Барсуки', 'Покемоны', 'Кенгуру', 'Ламы', 'Гномы', 'Зомби', 'Демоны'];
      this.engRace = ['Tomatos', 'Cormorants', 'Bears', 'Kitten', 'Badgers', 'Pockemons', 'Kangaroo', 'Lamas', 'Gnomes', 'Zombies', 'Demons'];
      this.langObject = new _lang_Language__WEBPACK_IMPORTED_MODULE_2__.default();
      this.lang = this.langObject.getCurrentLangObject().commandMenu;
      this.sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_4__.default();
    }
  
    _createClass(Commands, [{
      key: "init",
      value: function init() {
        var _this = this;
  
        this.generateTeamName();
        this.populateList(this.items, this.teamsList);
        this.addTeams.addEventListener('submit', this.addItem.bind(this));
        this.teamsList.addEventListener('click', this.deleteItem.bind(this));
        this.button.forEach(function (el) {
          return el.addEventListener('mouseenter', _this.playHoverSound);
        });
        this.startGameButton.addEventListener('click', function () {
          while (_this.items.length < 2) {
            return;
          }
  
          gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to('.menu', {
            duration: 1,
            ease: 'power1.out',
            y: 800
          });
          gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to('#sign', {
            duration: 1,
            ease: 'power1.out',
            y: -500
          });
          setTimeout(function () {
            document.querySelector('.main').innerHTML = '';
            (0,_game_timer__WEBPACK_IMPORTED_MODULE_1__.addTeamNamesToTeamsArr)();
            (0,_game_gameContainer__WEBPACK_IMPORTED_MODULE_0__.game)();
          }, 1000);
        });
        this.backMenuButton.addEventListener('click', function () {
          gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to('.menu', {
            duration: 1,
            ease: 'power1.out',
            y: 1000
          });
          setTimeout(function () {
            var menu = new _Menu__WEBPACK_IMPORTED_MODULE_3__.default();
            menu.init();
            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.from('.menu', {
              duration: 1,
              ease: 'power1.out',
              y: 1000
            });
          }, 1000);
        });
      } // eslint-disable-next-line class-methods-use-this
  
    }, {
      key: "playHoverSound",
      value: function playHoverSound() {
        var sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_4__.default();
        sound.mainHover();
      }
    }, {
      key: "generateTeamName",
      value: function generateTeamName() {
        while (this.items.length < 2) {
          var text = this.aliasSettings.lang === 'en' ? "".concat(this.random(this.engAdjective), " ").concat(this.random(this.engRace)) : "".concat(this.random(this.adjective), " ").concat(this.random(this.race));
          var item = {
            text: text
          };
          this.items.push(item);
          localStorage.setItem('items', JSON.stringify(this.items));
        }
      } // eslint-disable-next-line class-methods-use-this
  
    }, {
      key: "random",
      value: function random(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
      }
    }, {
      key: "addItem",
      value: function addItem(e) {
        e.preventDefault();
        var text = this.addTeams.querySelector('[name=item]').value;
        var item = {
          text: text
        };
        var temp = '';
        this.items.forEach(function (el) {
          temp = el.text;
        });
  
        if (item.text === temp || item.text === '') {
          return;
        }
  
        this.items.push(item);
        this.populateList(this.items, this.teamsList);
        localStorage.removeItem('items');
        localStorage.setItem('items', JSON.stringify(this.items));
        this.addTeams.reset();
      }
    }, {
      key: "populateList",
      value: function populateList() {
        var _this2 = this;
  
        this.teamsList.innerHTML = this.items.map(function (el, i) {
          return "\n        <li class=\"item".concat(i, " item\"><p  class=\"third-childd point-events-none text-small\"><a>").concat(el.text, "</a></p>\n          <button id=\"menu-button__del\" class=\"delete-team").concat(i, " menu-button menu-button__small\" data-index=").concat(i, "><p><a>").concat(_this2.lang.deleteTeamButton, "</a></p></button>\n        </li>\n      ");
        }).join('');
      }
    }, {
      key: "deleteItem",
      value: function deleteItem(e) {
        var button = e.target.closest('button');
        if (!button) return;
        var index = button.dataset.index;
        this.items.splice(index, 1);
        localStorage.removeItem('items');
        localStorage.setItem('items', JSON.stringify(this.items));
        this.populateList(this.items, this.teamsList);
      }
    }]);
  
    return Commands;
  }();

  var CreateCommands = /*#__PURE__*/function () {
    function CreateCommands() {
      _classCallCheck(this, CreateCommands);
  
      this.sign = document.querySelector('.menu #container .sign-wrap .sign');
      this.langObject = new _lang_Language__WEBPACK_IMPORTED_MODULE_0__.default();
      this.lang = this.langObject.getCurrentLangObject().commandMenu;
    }
  
    _createClass(CreateCommands, [{
      key: "init",
      value: function init() {
        var template = '';
        var commandsContainer = document.createElement('div');
        commandsContainer.className = 'command-wrapper';
        template = "<h2 class=\"menu-title menu-font command__title\"><p><a>".concat(this.lang.allCommands, "</a></p></h2>\n    <ul class=\"teams\">\n      <li class=\"teams__cell\"><p><a>").concat(this.lang.loadingTeams, "</a></p></li>\n    </ul>\n    <form class=\"add-teams\">\n      <input type=\"text\" class=\"input-here\" autocomplete=\"off\" name=\"item\" placeholder=\"").concat(this.lang.teamName, "\">\n      <input type=\"submit\" class=\"menu-button input-button\" value=\"").concat(this.lang.addTeamButton, "\">\n    </form>\n    <button class=\"button-startgame-play menu-button\"><p><a>").concat(this.lang.startGameButton, "</a></p></button>;\n    <button class=\"button-backmenu-menu menu-button\"><p><a>").concat(this.lang.backMenuButton, "</a></p></button>");
        commandsContainer.innerHTML = template;
        this.sign.appendChild(commandsContainer);
        return this.main;
      }
    }]);
  
    return CreateCommands;
  }();



  function shuffleCards() {
    return currentCardsStack.sort(function () {
      return Math.round(Math.random() * 100) - 50;
    });
  } // Card
  
  
  function generateCard() {
    // choseCurrentCardsLang();
    document.querySelector('.card__word').innerHTML = currentCardsStack[i][currentWordsLang];
    i++;
  } // Next round function
  
  
  function nextRound() {
    document.querySelector('.main').innerHTML = '';
    addGlobalStatisticsTeam(teamFlag, arrConfirmed, arrSkiped);
    arrConfirmed.length = 0;
    arrSkiped.length = 0;
    (0,_gameContainer__WEBPACK_IMPORTED_MODULE_1__.mainGamePlay)();
  } // Add statistics teams in global array-stat
  
  
  function addGlobalStatisticsTeam(teamIndex, confirmedArr, skipedArr) {
    var _teams$teamIndex$answ, _teams$teamIndex$answ2;
  
    (_teams$teamIndex$answ = _timer__WEBPACK_IMPORTED_MODULE_2__.teams[teamIndex].answers.confirmed).push.apply(_teams$teamIndex$answ, _toConsumableArray(confirmedArr.slice()));
  
    (_teams$teamIndex$answ2 = _timer__WEBPACK_IMPORTED_MODULE_2__.teams[teamIndex].answers.skiped).push.apply(_teams$teamIndex$answ2, _toConsumableArray(skipedArr.slice()));
  } // Buttons clickhandler
  
  
  var rotationGradient = 0;
  
  function rotationGameContainer() {
    gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.game-container__card', {
      duration: 0.9,
      rotationX: rotationGradient
    });
  }
  
  var i = 1;
  
  function clickReadyFunc() {
    var sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
    sound.cardClick();
    rotationGradient -= 360;
    _timer__WEBPACK_IMPORTED_MODULE_2__.teams[teamFlag].points += 1;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
    arrConfirmed.push(currentCardsStack[i - 1]);
    document.querySelector('.second').innerHTML = _timer__WEBPACK_IMPORTED_MODULE_2__.teams[teamFlag].points;
    rotationGameContainer();
    i += 1;
  }
  
  function clickSkipFunc() {
    var sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
    sound.cardClick();
    rotationGradient += 360;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
    arrSkiped.push(currentCardsStack[i - 1]);
    rotationGameContainer();
    i += 1;
  }
  
  function clickNextRoundFunc() {
    var sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
    sound.nextRoundClick();
  
    if (teamFlag < _timer__WEBPACK_IMPORTED_MODULE_2__.teams.length - 1) {
      teamFlag += 1;
    } else {
      teamFlag = 0;
    }
  
    gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.team-container__team-name', {
      duration: 1,
      ease: 'power1.out',
      y: -500
    });
    gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.round-stat-modal', {
      duration: 1,
      ease: 'power1.out',
      y: 1000
    });
    rotationGradient = 0;
    setTimeout(function () {
      gameHotkeys.removeGameHandler();
      nextRound();
      generateSwiper();
    }, 1000);
  }
  
  function clickPauseMenuFunc() {
    var sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
    sound.cardClick();
    document.querySelector('.pause').style.visibility = 'visible';
    pauseFlag = true;
    gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.from('.pause', {
      duration: 1,
      ease: 'power1.out',
      y: -500
    });
  }
  
  function clickContainerButtons(e) {
    var clickReady = e.target.closest('.game-container__button_ready');
    var clickSkip = e.target.closest('.game-container__button_skip');
    var clickNextRound = e.target.closest('.round-stat-modal__button');
    var clickCardsForAdults = e.target.closest('.cards__for-adults');
    var clickCardsGeneral = e.target.closest('.cards__main');
    var clickBackToMainMenu = e.target.closest('.back-to-main-menu__button');
    var clickHideFooterButton = e.target.closest('.hide-footer');
    var clickShowFooterButton = e.target.closest('.show-footer');
    var clickPauseMenu = e.target.closest('.pause-menu');
    var clickResume = e.target.closest('.pause__btn_resume');
    var clickMenuBtn = e.target.closest('.pause__btn_menu');
  
    if (clickReady) {
      clickReadyFunc();
    } else if (clickSkip) {
      clickSkipFunc();
    } else if (clickNextRound) {
      clickNextRoundFunc();
    } else if (clickCardsForAdults) {
      var sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
      sound.mainClick();
      currentCardsStack = _cards__WEBPACK_IMPORTED_MODULE_0__.default.forAdults;
      choseCurrentCardsLang();
      shuffleCards();
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.cards__for-adults', {
        duration: 1,
        ease: 'power1.out',
        x: -1000
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.cards__main', {
        duration: 1,
        ease: 'power1.out',
        x: 1000
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.cards-selection-container__title', {
        duration: 1,
        ease: 'power1.out',
        y: -500
      });
      setTimeout(function () {
        document.querySelector('.main').innerHTML = '';
        (0,_gameContainer__WEBPACK_IMPORTED_MODULE_1__.mainGamePlay)();
        generateSwiper();
      }, 1000);
    } else if (clickCardsGeneral) {
      var _sound = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
  
      _sound.mainClick();
  
      currentCardsStack = _cards__WEBPACK_IMPORTED_MODULE_0__.default.main;
      choseCurrentCardsLang();
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.cards__for-adults', {
        duration: 1,
        ease: 'power1.out',
        x: -1000
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.cards__main', {
        duration: 1,
        ease: 'power1.out',
        x: 1000
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.cards-selection-container__title', {
        duration: 1,
        ease: 'power1.out',
        y: -500
      });
      shuffleCards();
      setTimeout(function () {
        document.querySelector('.main').innerHTML = '';
        (0,_gameContainer__WEBPACK_IMPORTED_MODULE_1__.mainGamePlay)();
        generateSwiper();
      }, 1000);
    } else if (clickBackToMainMenu) {
      gameHotkeys.removeGameHandler();
  
      var _sound2 = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
  
      _sound2.cardClick();
  
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.finish-game-modal__title', {
        duration: 1,
        ease: 'power1.out',
        y: -500
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.finish-modal', {
        duration: 1,
        ease: 'power1.out',
        y: 500
      });
      setTimeout(function () {
        document.querySelector('.main').innerHTML = '';
        document.querySelector('.main').appendChild((0,_loadingBeforeMenu__WEBPACK_IMPORTED_MODULE_4__.generateLoardingBeforeMenu)());
        document.querySelector('.loading-line').style.display = 'none';
        document.querySelector('#ready').classList.remove('off');
        document.querySelector('#sign').classList.remove('off');
        var menu = new _Menu__WEBPACK_IMPORTED_MODULE_7__.default();
        menu.init();
        gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.from('#sign', {
          duration: 1,
          ease: 'power1.out',
          y: -500
        });
        gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.from('.menu', {
          duration: 1,
          ease: 'power1.out',
          y: 700
        });
        shuffleCards();
        _timer__WEBPACK_IMPORTED_MODULE_2__.teams.length = 0;
        rotationGradient = 0;
        i = 1;
        teamFlag = 0;
        arrConfirmed.length = 0;
        arrSkiped.length = 0;
      }, 1000);
    } else if (clickHideFooterButton) {
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.footer', {
        duration: 1,
        ease: 'power1.out',
        y: 85
      });
      document.querySelector('.show-footer').classList.remove('hide');
      document.querySelector('.hide-footer').classList.add('hide');
    } else if (clickShowFooterButton) {
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.footer', {
        duration: 1,
        ease: 'power1.out',
        y: 0
      });
      document.querySelector('.show-footer').classList.add('hide');
      document.querySelector('.hide-footer').classList.remove('hide');
    } else if (clickPauseMenu) {
      clickPauseMenuFunc();
    } else if (clickResume) {
      var _sound3 = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
  
      _sound3.mainClick();
  
      document.querySelector('.pause').style.visibility = 'hidden';
      pauseFlag = false;
    } else if (clickMenuBtn) {
      var _sound4 = new _sound_sound__WEBPACK_IMPORTED_MODULE_5__.default();
  
      _sound4.cardClick();
  
      gameHotkeys.removeGameHandler();
      (0,_timer__WEBPACK_IMPORTED_MODULE_2__.setNewTime)();
      pauseFlag = false;
      document.querySelector('.main').innerHTML = '';
      document.querySelector('.main').appendChild((0,_loadingBeforeMenu__WEBPACK_IMPORTED_MODULE_4__.generateLoardingBeforeMenu)());
      document.querySelector('.loading-line').style.display = 'none';
      document.querySelector('#ready').classList.remove('off');
      document.querySelector('#sign').classList.remove('off');
      var menu = new _Menu__WEBPACK_IMPORTED_MODULE_7__.default();
      menu.init();
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.from('#sign', {
        duration: 1,
        ease: 'power1.out',
        y: -500
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.from('.menu', {
        duration: 1,
        ease: 'power1.out',
        y: 700
      });
      shuffleCards();
      _timer__WEBPACK_IMPORTED_MODULE_2__.teams.length = 0;
      rotationGradient = 0;
      i = 1;
      teamFlag = 0;
      arrConfirmed.length = 0;
      arrSkiped.length = 0;
    }
  }
  
  function buttonsClickHandler() {
    var buttonsContainer = document.querySelector('.main');
    var footerHandler = document.querySelector('.footer');
    buttonsContainer.addEventListener('click', clickContainerButtons);
    footerHandler.addEventListener('click', clickContainerButtons);
  }
  
  buttonsClickHandler(); // Swiper
  
  function generateSwiper() {
    // eslint-disable-next-line no-undef
    var hammertime = new Hammer(document.querySelector('.game-container__card'), {
      enable: true,
      // eslint-disable-next-line no-undef
      recognizers: [[Hammer.Swipe, {
        direction: Hammer.DIRECTION_VERTICAL
      }]]
    });
    hammertime.on('swipeup', function () {
      rotationGradient -= 360;
      _timer__WEBPACK_IMPORTED_MODULE_2__.teams[teamFlag].points += 1;
      document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
      arrConfirmed.push(currentCardsStack[0 + i]);
      document.querySelector('.second').innerHTML = _timer__WEBPACK_IMPORTED_MODULE_2__.teams[teamFlag].points;
      rotationGameContainer();
      i += 1;
    });
    hammertime.on('swipedown', function () {
      rotationGradient += 360;
      document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
      arrSkiped.push(currentCardsStack[0 + i]);
      rotationGameContainer();
      i += 1;
    });
    gameHotkeys.init();
    gameHotkeys.setGameHandler();
    gameHotkeys.setUpGameButton(clickReadyFunc);
    gameHotkeys.setDownGameButton(clickSkipFunc);
    gameHotkeys.setEscGameButton(clickPauseMenuFunc);
  }
  
  function generateSwiperFooter() {
    // eslint-disable-next-line no-undef
    var hammertime = new Hammer(document.querySelector('.footer'), {
      enable: true,
      // eslint-disable-next-line no-undef
      recognizers: [[Hammer.Swipe, {
        direction: Hammer.DIRECTION_VERTICAL
      }]]
    });
    hammertime.on('swipedown', function () {
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.footer', {
        duration: 1,
        ease: 'power1.out',
        y: 65
      });
      document.querySelector('.show-footer').classList.remove('hide');
      document.querySelector('.hide-footer').classList.add('hide');
    });
    hammertime.on('swipeup', function () {
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to('.footer', {
        duration: 1,
        ease: 'power1.out',
        y: 0
      });
      document.querySelector('.show-footer').classList.add('hide');
      document.querySelector('.hide-footer').classList.remove('hide');
    });
  }
  
  generateSwiperFooter();