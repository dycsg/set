$(document).ready(() => {
  $(".start_btn").click(() => {
    $(".top1").attr("src", "img/page2/1023_241.png");
    $(".page1").addClass("none");

    $(".page3").removeClass("none");
    huoqu2();
    //读取JSON
    $.getJSON("data/food.json", (data) => {
      let strHtml = "";
      //存储数据的变量
      let random = parseInt(50 * Math.random());
      $.each(data, (infoIndex, info) => {
        strHtml += "编号：" + info["id"] + "<br>";
        strHtml += "店名：" + info["name"] + "<br>";
        if (info["type"] == "hot") {
          strHtml += "类型：辣";
        } else {
          strHtml += "类型：不辣";
        }
        strHtml += "<br>";
      });
    });
  });

  //用餐人数
  $(".add").click(() => {
    let count = $(".count span").text();
    count++;
    $(".count span").text(count);
  });
  $(".reduce").click(() => {
    let count = $(".count span").text();
    if (count != 0) {
      count--;
      $(".count span").text(count);
    }
  });
  var pathlist = [
    "img/page2/1023_24.png",
    "img/page2/1023_26.png",
    "img/page2/1023_28.png",
    "img/page2/1023_34.png",
    "img/page2/1023_36.png",
  ];
  //page2选择辣度切换
  $(".top1").click(() => {
    let path = "img/page2/1023_241.png";
    $(this).attr("src", path);

    $(".top2").attr("src", pathlist[1]);
    $(".top3").attr("src", pathlist[2]);
    $(".down1").attr("src", pathlist[3]);
    $(".down2").attr("src", pathlist[4]);
  });
  $(".top2").click(() => {
    let path = "img/page2/1023_261.png";
    $(this).attr("src", path);
    console.log($(this).attr("src"));

    $(".top1").attr("src", pathlist[0]);
    $(".top3").attr("src", pathlist[2]);
    $(".down1").attr("src", pathlist[3]);
    $(".down2").attr("src", pathlist[4]);
  });
  $(".top3").click(() => {
    let path = "img/page2/1023_281.png";
    $(this).attr("src", path);
    //		console.log($(this).attr('src'));

    $(".top2").attr("src", pathlist[1]);
    $(".top1").attr("src", pathlist[0]);
    $(".down1").attr("src", pathlist[3]);
    $(".down2").attr("src", pathlist[4]);
  });

  $(".down1").click(() => {
    let path = "img/page2/1023_341.png";
    $(this).attr("src", path);

    $(".top2").attr("src", pathlist[1]);
    $(".top3").attr("src", pathlist[2]);
    $(".top1").attr("src", pathlist[0]);
    $(".down2").attr("src", pathlist[4]);
  });

  $(".down2").click(() => {
    let path = "img/page2/1023_361.png";
    $(this).attr("src", path);
    $(".top2").attr("src", pathlist[1]);
    $(".top3").attr("src", pathlist[2]);
    $(".top1").attr("src", pathlist[0]);
    $(".down1").attr("src", pathlist[3]);
  });
});

//图片随机搞
var huoqu2 = () => {
  $.getJSON("data/food.json", (data) => {
    let strHtml = "";
    //存储数据的变量
    let random = parseInt(53 * Math.random());

    //显示处理后的数据

    let randomHtml =
      `<img src='img/page3/1024_94.png' class='food_title'/><div class='food_img'>
			<img src="` +
      data[random].img +
      `"  width='100%' height='100%'/></div>
			<p class='shop_name'> ` +
      data[random].name +
      `</p>
			<p class='shop_address'>` +
      data[random].address +
      `</p>
			<p class='shop_price'>` +
      data[random].price +
      ` </p>`;

    //		$('.food_img').html("<img src=' "+ data[random] .img+" '      width=\"100%\" height=\"100%\">");
    $(".content1").html(randomHtml);
  });
  t = setTimeout("huoqu2()", 95);
};

$(".enter_btn").click(() => clearTimeout(t));
$(".again_btn").click(() => huoqu2());

$(".start_select_btn").click(() => {
  $(".page2").addClass("none");
  $(".page3").removeClass("none");
  huoqu2();
});
