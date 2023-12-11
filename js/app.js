// app.js
// new Vue({
//   el: "#video-play",
//   data: {
//     videoOptions: {
//       autoplay: true, // 自动播放
//       loop: true, // 循环播放
//       muted: true, // 静音（可选）
//     },
//   },
//   mounted() {
//     // 当组件挂载后,获取 video 元素并播放
//     this.$refs.video.play();
//   },
// });

new Vue({
  el: '#learn-situation',
  data: {
      courses: [
          { title: 'Python Programming', description: 'Python课程通常涵盖Python编程的基础知识和高级应用。Python语言的基本语法，数据类型，运算符，控制流语句，函数定义和调用，以及Python的基本库。此外，学生可能会学习如何使用Python处理数据，包括使用Python的内置数据类型和第三方库。' },
          { title: 'Software Engineering', description: '软件工程是研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。在现代社会中，软件应用于多个方面。典型的软件有电子邮件、嵌入式系统、人机界面、办公套件、操作系统、编译器、数据库、游戏等。' },
          { title: 'Database Management', description: '数据库课程是一门介绍如何管理和操作数据库的学科。该课程主要涵盖数据库原理、数据库设计、数据库SQL语言、数据库管理、数据库应用编程、NoSQL数据库等方面知识与技术方法。通过学习该课程，学生可以掌握如何设计和实现数据库系统，以及如何使用SQL语言进行数据查询和管理。此外，该课程也教授学生如何进行数据库安全性控制和数据完整性控制等。' },
          { title: 'Web Frontend Development', description: '《Web前端开发》是面向计算机科学与技术的一门专业方向课，主要介绍HTML基础知识、CSS3、文档对象模型、数据传输、JavaScript、Jquery等前端开发技术等内容。通过课程学习，学生将掌握Web前端规划与设计的基本理论和基本知识，具备基于Web的前端设计的基本能力，能够从事Web、移动等方面的软件前端开发工作。' },
      ]
  }
});
