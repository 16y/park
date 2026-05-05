// park-theme — 西藏智盈通信息工程有限公司

document.addEventListener('DOMContentLoaded', function() {

  // ========== 汉堡菜单切换 ==========
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // ========== 导航栏滚动效果 ==========
  var header = document.querySelector('.nav-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      header.style.background = 'rgba(10,10,26,0.9)';
      header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
    } else {
      header.style.background = 'rgba(10,10,26,0.7)';
      header.style.boxShadow = 'none';
    }
  });

  // ========== Hero 幻灯片轮播 ==========
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');
  var heroText = document.querySelector('.hero-text-wrapper');
  var currentSlide = 0;
  var slideTimer = null;

  // 幻灯片对应的文字数据
  var slideTexts = [];

  // 从页面获取幻灯片文字（标题取自 h1 .gradient-text）
  // 这里用配置数据硬编码
  var slideData = [];
  var heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    // 尝试从现有 DOM 提取数据
    var h1El = heroContent.querySelector('h1 .gradient-text');
    var subEl = heroContent.querySelector('.hero-sub');
    var btnEl = heroContent.querySelector('.btn-primary');

    var titles = [
      '智慧停车 · 安全监控',
      '专业停车场建设',
      '安防监控系统'
    ];
    var subtitles = [
      '科技守护每一天',
      '车牌识别 · 无感支付 · 云端管理',
      '高清监控 · AI智能分析 · 远程查看'
    ];
    var descs = [
      '西藏智盈通信息工程有限公司 — 立足日喀则，用智能科技为城市停车与安防赋能',
      '覆盖住宅小区、商业综合体、医���、写字楼等各类场景',
      '高清数字监控、夜视全彩、远程实时查看，全方位守护安全'
    ];
    var btns = [
      '✦ 了解服务',
      '了解智慧停车',
      '了解安防监控'
    ];
    var btnLinks = [
      '/services/',
      '/parking/',
      '/security/'
    ];

    if (slides.length > 0 && h1El) {
      function goToSlide(index) {
        // 切换图片
        slides.forEach(function(s) { s.classList.remove('active'); });
        dots.forEach(function(d) { d.classList.remove('active'); });
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // 切换文字
        if (h1El) h1El.textContent = titles[index];
        if (subEl) subEl.textContent = descs[index];
        if (btnEl) {
          btnEl.textContent = btns[index];
          btnEl.href = btnLinks[index];
        }

        currentSlide = index;
        resetTimer();
      }

      function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
      }

      function resetTimer() {
        if (slideTimer) clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000);
      }

      dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
          goToSlide(parseInt(this.dataset.slide));
        });
      });

      resetTimer();
    }
  }

  // ========== 滚动渐入动画 (IntersectionObserver) ==========
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    revealObserver.observe(el);
  });
});
