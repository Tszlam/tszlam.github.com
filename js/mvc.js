window.onload=function(){
	var vue = new Vue({
		el:"#all",
		data:{
			nav:["自我介绍","我的简历","联系我"],
			info:infos,
			page:0
		},
		methods:{
			changePage:function(e){
//				console.log(e.target.getAttribute("data-page"));
				this.page = e.target.getAttribute("data-page");
			},
			show:function(index){
				return index==this.page;
			}
		},
		computed:{}
	});
};