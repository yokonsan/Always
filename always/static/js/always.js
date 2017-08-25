// Always js

$(function() {
  // 导航栏点击效果
  $('.buttons a:gt(0)').click(function() {
    $('.buttons a:gt(0)').removeClass();
    $(this).attr('class', 'current');
  });

  // 首页文章box效果
  $('.post-box').mouseenter(function() {
    $(this).css('boxShadow', '2px 2px 5px #d3d6da');
  });
  $('.post-box').mouseleave(function() {
    $(this).css('boxShadow', '');
  });

  // button go to top
  $(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $('#go-to-top').fadeIn(1000);
        $('#go-to-top').css('left', (Math.max(document.body.clientWidth, 960) - 960) / 2 + 690);
      } else {
        $('#go-to-top').fadeOut(1000);
      }
    });

    $('#go-to-top').click(function() {
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
    });
  });

});

$(function() {
  // 移动端导航按钮
  $('.menu-btn').click(function() {
    if ($('#menu').css('display') === 'none') {
      $('#menu').css('display', 'block');
    } else {
      $('#menu').css('display', 'none');
    }
  });
  // 搜索框
  $('#menu .menu-list .list li:first-child').click(function() {
    $('#mob-search').css('display', 'block');
  });
  $('#mob-search #cancel').click(function() {
    $('#mob-search').css('display', 'none');
  })
});

$(function() {
  // 设置资料选择显示表单
  $('.settings-title .tabs-list li:first-child').click(function() {
    $('.settings-title .tabs-list li').removeClass('tab-active');
    $('.tabs-container .tab-content').removeClass('tab-content-active');
    $(this).addClass('tab-active');
    $('.tabs-container .tab-content:first-child').addClass('tab-content-active');
  });
  $('.settings-title .tabs-list li:last-child').click(function() {
    $('.settings-title .tabs-list li').removeClass('tab-active');
    $('.tabs-container .tab-content').removeClass('tab-content-active');
    $(this).addClass('tab-active');
    $('.tabs-container .tab-content:last-child').addClass('tab-content-active');
  });

});

$(function() {
  // 文章标签点击显示input上
  $('.tags-box .tags-list .tag').click(function() {
    $('#tags-input').val($('#tags-input').val() + $(this).text() + ',');
  });
});

$(function() {
  // 神奇的js，要多多学习
  // 点击创作文章div实现跳转
  $('.write-article').click(function() {
    window.location.href="{{url_for('main.write_article')}}";
  });
  // 点击创作小说弹出选项
  $('.write-novel').click(function() {
    if ($('.novel-item').css('display') === 'none') {
      $('.novel-item').css('display', 'block');
    } else {
      $('.novel-item').css('display', 'none');
    }
  });

  // 小说分类点击显示
  $('.novel-item .tags-list .tag').click(function() {
    $('.novel-item .disable').val($(this).text());
  });
});

