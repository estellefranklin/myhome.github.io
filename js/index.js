$(document).ready(function () {
  $("#placeholder").load(
    "./intruduction.html",
    function (response, status, xhr) {
      if (status == "error") {
        console.error("Error:", xhr.status, xhr.statusText);
      }
    }
  );
});

// 监听链接点击事件
$(".submenu-item").click(function (event) {
  // 阻止默认行为
  event.preventDefault();

  // 获取链接的 href
  var url = $(this).attr("href");
  console.log(url);
  if (url == "./photography.html") {
    // 隐藏 id 为 'video-play' 的元素
    $("#video-play").attr("class", "hidden");
  }
  // 使用 load 方法加载并嵌入 HTML 内容
  $("#placeholder").load(url, function (response, status, xhr) {
    if (status == "error") {
      console.error("Error:", xhr.status, xhr.statusText);
    }
  });
});
