"use strict";

$(function (){
	const app = new Vue({
		el: '#table',
		data: {
			tasks: {
				col1: [1,2,3,4,5,6],
				col2: [7],
				col3: []
			}
		},
		methods: {
			change(e) {
				let target = $(e.target);

				if (target.is(':checked')) {
					target.prev().addClass('done');
				} else {
					target.prev().removeClass('done');
				}
			}
		}
	});
	
   $('.col').sortable({
   	connectWith: '.col',
   	containment: '#table',
   	cursor: 'grabbing'
   });
});
