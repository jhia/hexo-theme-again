(function() {
  function changeAvatar(avatar) {
    avatar.to(avatar._curIconId === 'cup' ? 'blockie' : 'cup');
  }
  if(document.querySelector('.description')) {
    var canSvg = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);
    if(canSvg) {
      const avatar = new SVGMorpheus('#avatar', { iconId: 'blockie', rotation: 'random'});
      setInterval(changeAvatar.bind(this, avatar), 3000);
    } else {
      const avatar = document.createElement('img');
      avatar.src = '/images/cup2.svg';
      avatar.id = 'avatar';
      avatar.className = 'avatar';
      document.querySelector('.description').replaceNode(avatar, document.querySelector('.description').querySelector('#avatar'));
    }
  }

  if (!document.querySelector('.banner')) {
    document.querySelector('.app-nav').className += ' green';
  }

  if(!!document.querySelector('.post')) {
    var main = document.querySelector('.post');
    if(main.querySelector('img').alt === 'banner') {
      var banner = document.querySelector('.banner');
      banner.src = main.querySelector('img').src;
      main.deleteNode(main.querySelector('img'));
    }
  }
})();
