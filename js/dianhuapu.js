$(function(){
       let arr =[
           {
               name:`张三`,tel:18246465634,py:`zhangsan`
           },
           {
               name:`李四`,tel:18242585634,py:`lisi`
           },
           {
               name:`王五`,tel:18210565634,py:`wangwu`
           },
           {
               name:`赵六`,tel:18211865634,py:`zhaoliu`
           },
           {
               name:`洪七`,tel:18246851634,py:`hongqi`
           },
           {
               name:`钱八`,tel:18242385644,py:`qianba`
           },
           {
               name:`宋九`,tel:18248525634,py:`songjiu`
           },
           {
               name:`卢十`,tel:18214565634,py:`lushi`
           },
           {
               name:`二十一`,tel:18243465634,py:`ershiyi`
           },
           {
               name:`忠华`,tel:18245865634,py:`zhonghua`
           },
           {
               name:`路易斯`,tel:18246465689,py:`luyisi`
           },
           {
               name:`宫本武藏`,tel:18246465657,py:`gongbenwuzang`
           },
           {
               name:`泰山`,tel:18246465656,py:`taishan`
           },
      ];
       let main = $(`main`);
       let aside=$(`.aside`);
       let input = $(`input`);
       let solid=$(`.solid>li`);

    input.on(`input`,function(){
           let val = input.val();
           let newArr=arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val)||ele.tel.toString().includes(val));
           render(newArr);
       });
       render(arr);
       function render(arr) {
           aside.empty();
           main.empty();
           let person ={

           };
           arr.forEach(ele => {
               let firstchar = ele.py.charAt(0).toUpperCase();
               if (!person[firstchar]) {
                   person[firstchar] = [];
               }
               person[firstchar].push(ele);
           });


           let html = ``;
           let html1= ``;
           let html2=``;

           let keysarr = Object.keys(person).sort();

           for (let i = 0; i < keysarr.length; i++) {
               let ele = keysarr[i];
               console.log(person[ele].length);
               html1 += `<li>${ele}</li>`;
               html += `
           <section><h2>${ele}</h2>
           `;
               for (let j = 0; j < person[ele].length; j++) {
                   let info = person[ele][j];
                   html += `
               <div><a href="tel:${info.tel}">${info.name}</a></div>
               `
               }
               html += `
           </section>
           `
           }
           aside.html(html1);
           main.html(html);
           let section = $(`main>section`);
           let dis1 = section[0].offsetTop;
           let dis2 = $(window).scrollTop();
           let dis = dis1-dis2;
           console.log(dis2);
           console.log(dis);
       }
});