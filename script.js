

$(function(){
    //検索
    //開くボタンを押した時には
    $(".search-btn").click(function () {
    $(".search-wrap").addClass('panelactive');//#search-wrapへpanelactiveクラスを付与
	$(".search-text").focus();//テキスト入力のinputにフォーカス
    });
    //閉じるボタンを押した時には
     $(".close-btn").click(function () {
     $(".search-wrap").removeClass('panelactive');//#search-wrapからpanelactiveクラスを除去
    });

    //ハンバーガーメニュー
    // $(".contents").hide();

    $(".ham").click(function(){
        $(".contents").toggleClass("show");
    });

    var headerH = $("#header").outerHeight(true);

    function FixedAnime(){
        var scroll = $(window).scrollTop();
        if (scroll >= headerH) {
            $("#header").addClass("HeightMin");
        } else {
            $("#header").removeClass("HeightMin");
        }
    }
    $(window).scroll(function(){
        FixedAnime();
    })

    function scroll_effect() {
        var element = document.getElementsByClassName('scroll-up');
        if(!element) return;
                            
        var scrollY = window.pageYOffset;
        var windowH = window.innerHeight;
        var showTiming = 500; // 要素を表示するタイミング
        for(var i = 0; i < element.length; i++) { 
          var elemClientRect = element[i].getBoundingClientRect(); 
          var elemY = scrollY + elemClientRect.top; 
          if(scrollY > elemY - windowH + showTiming) {
            element[i].classList.add('is-show');
          }
        }
      }
      window.addEventListener('scroll', scroll_effect); // 
    // $(window).scroll(function(){
    //     const windowHeight = $(window).height();
    //     const scroll = $(window).scrollTop;

    //     $(".item").each(function (){
    //         const targetPosition = $(this).offset().top;
    //         if(scroll > targetPosition - windowHeight +100) {
    //             $(this).addClass("is-fadein");
    //         }
    //     });

    //     });

});




