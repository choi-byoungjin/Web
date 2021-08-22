var Links = {
  setColor:function(color){//폰트색을 바꾸는 함수 생성
    // var alist = document.querySelectorAll('a'); //a 셀렉터 배열
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color; //a 태그의 글씨 색상이 전부 파우더 블루로 변환
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){//매개변수  self로 주고 this -> self로 변경
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('salmon');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
