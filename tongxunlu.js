$(function () {
    let arr=[
        {name:'高志梅',tel:'18406586217',py:'gaozhimei'},
        {name:'张熙烨',tel:'18406585435',py:'zhangxiye'},
        {name:'李振龙',tel:'18406586242',py:'lizhenglong'},
        {name:'高鑫',tel:'184064382197',py:'gaoxin'},
        {name:'耿昊',tel:'18406438275',py:'genghao'},
        {name:'任洁芳',tel:'18406586246',py:'renjiefang'},
        {name:'高娇娇',tel:'18406586978',py:'gaojiaojiao'},
        {name:'张晋铭',tel:'18406586875',py:'zhangjinming'},
    ];
    let main=$('main');
    let aside=$('.aside');
    let input =$('input');

    input.on('input',function () {
        let val=$(this).val();
        let newarr=arr.filter(ele=>ele.py.includes(val) ||ele.name.includes(val) ||ele.tel.includes(val));
        console.log(newarr);
        render(newarr);
    });
    render(arr);

    function render(arr) {
        console.log(arr);
        main.empty();
        aside.empty();
        let persion ={

        };
        arr.forEach(ele=>{
            let firstChar =ele.py.charAt(0).toUpperCase();
            if(!persion[firstChar]){
                persion[firstChar]=[];
            }
            persion[firstChar].push(ele);
        })
        let keysarr=Object.keys(persion).sort();
        let html='';
        let html1='';
        for (let i=0;i<keysarr.length;i++){
            let ele = keysarr[i];
            html+=`<section><h2>${ele}</h2>`;
            html1+=`<h3>${ele}</h3>`;
            for (let j=0;j<persion[ele].length;j++){
                let info =persion[ele][j];
                html+=`<div><a href="tel:${info.tel}"><name>${info.name}</name></a></div>`;
            }

            html+=`</section>`;

        }
        main.html(html);
        aside.html(html1);

    }
});