(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(64),r=a.n(s),l=(a(73),a(65)),c=a(1),i=a(10),d=a(11),u=a(14),m=a(12),h=a(13),p=a(66);function b(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}function f(e){return new Date(e).getTime()}var k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.props.clickHandler,disabled:this.props.disabled},this.props.text)}}]),t}(o.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).select=a.select.bind(Object(c.a)(Object(c.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"select",value:function(e){this.props.selectHandler(this.props.name,e.target.checked)}},{key:"render",value:function(){var e=this.props.selected?"table-primary":"";return o.a.createElement("tr",{className:e},o.a.createElement("td",null,this.props.name),o.a.createElement("td",null,(this.props.value*this.props.rate).toFixed(2),this.props.currency),o.a.createElement("td",null,this.props.quantity),o.a.createElement("td",null,(this.props.value*this.props.quantity*this.props.rate).toFixed(2),this.props.currency),o.a.createElement("td",{className:"text-center"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",checked:this.props.selected,onChange:this.select})))}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:e.initialName},a.handleChange=a.handleChange.bind(Object(c.a)(Object(c.a)(a))),a.rename=a.rename.bind(Object(c.a)(Object(c.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"rename",value:function(){this.props.renameHandler(this.state.name),document.getElementById("modal-rename-close-"+this.props.k).click()}},{key:"render",value:function(){return o.a.createElement("div",{className:"modal fade",id:"modal-rename-"+this.props.k,tabIndex:"-1",role:"dialog","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title"},"Rename portfolio"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"input-rename-"+this.props.k},"New name :"),o.a.createElement("input",{type:"text",className:"form-control",id:"input-rename-"+this.props.k,placeholder:"Enter here the new name of this portfolio",value:this.state.name,onChange:this.handleChange}))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",id:"modal-rename-close-"+this.props.k},"Close"),o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.rename},"Save changes")))))}}]),t}(o.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={symbol:"",quantity:1,canAddStock:!1},a.handleChange=a.handleChange.bind(Object(c.a)(Object(c.a)(a))),a.addStock=a.addStock.bind(Object(c.a)(Object(c.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value.toUpperCase()))}},{key:"addStock",value:function(){this.props.addStockHandler(this.state.symbol,this.state.quantity),document.getElementById("modal-addstock-close-"+this.props.k).click()}},{key:"render",value:function(){var e=this.state.quantity>0&&this.props.isCorrectSymbolHandler(this.state.symbol);return o.a.createElement("div",{className:"modal fade",id:"modal-addstock-"+this.props.k,tabIndex:"-1",role:"dialog","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title"},"Add stock"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"input-addstock-symbol-"+this.props.k},"Symbol :"),o.a.createElement("input",{type:"text",className:"form-control",id:"input-addstock-symbol-"+this.props.k,placeholder:"Enter here the symbol of the stock",value:this.state.symbol,onChange:this.handleChange,name:"symbol",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"input-addstock-quantity-"+this.props.k},"Quantity :"),o.a.createElement("input",{type:"number",min:1,step:1,className:"form-control",id:"input-addstock-quantity-"+this.props.k,placeholder:"Enter here the number of shares",value:this.state.quantity,onChange:this.handleChange,name:"quantity"})))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",id:"modal-addstock-close-"+this.props.k},"Close"),o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addStock,disabled:!e},"Add stock !")))))}}]),t}(o.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={datasets:{},labels:[],dateA:b((new Date).getTime()-6048e5),dateB:b((new Date).getTime())},a.stocks=a.props.stocks,a.resolution="1m",a.updateChart1m=a.updateChart1m.bind(Object(c.a)(Object(c.a)(a))),a.updateChart3m=a.updateChart3m.bind(Object(c.a)(Object(c.a)(a))),a.updateChart6m=a.updateChart6m.bind(Object(c.a)(Object(c.a)(a))),a.updateChart1y=a.updateChart1y.bind(Object(c.a)(Object(c.a)(a))),a.updateChart2y=a.updateChart2y.bind(Object(c.a)(Object(c.a)(a))),a.updateChart5y=a.updateChart5y.bind(Object(c.a)(Object(c.a)(a))),a.updateChartCustom=a.updateChartCustom.bind(Object(c.a)(Object(c.a)(a))),a.updateDateA=a.updateDateA.bind(Object(c.a)(Object(c.a)(a))),a.updateDateB=a.updateDateB.bind(Object(c.a)(Object(c.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.stocks=e.stocks,this.updateChart()}},{key:"updateChart",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({datasets:{},labels:[]}),Object.keys(this.stocks).forEach(function(a){fetch("https://api.iextrading.com/1.0/stock/".concat(a,"/chart/").concat(e.resolution)).then(function(e){return e.json()}).then(function(n){var o=[Math.floor(Math.random()*Math.floor(256)),Math.floor(Math.random()*Math.floor(256)),Math.floor(Math.random()*Math.floor(256))];t&&(n=n.filter(function(t){var a=f(t.date);return a>=f(e.state.dateA)&&a<f(e.state.dateB)}));var s={label:a,fill:!1,backgroundColor:"rgba(".concat(o[0],", ").concat(o[1],", ").concat(o[2],", 0.8)"),borderColor:"rgb(".concat(o[0],", ").concat(o[1],", ").concat(o[2],")"),data:n.map(function(e){return e.open})},r=e.state.datasets;r[a]=s,e.setState({datasets:r,labels:n.map(function(e){return e.label})})},function(e){alert("Error retrieving graph data for stocks..."+e)})})}},{key:"updateChart1m",value:function(){this.resolution="1m",this.updateChart()}},{key:"updateChart3m",value:function(){this.resolution="3m",this.updateChart()}},{key:"updateChart6m",value:function(){this.resolution="6m",this.updateChart()}},{key:"updateChart1y",value:function(){this.resolution="1y",this.updateChart()}},{key:"updateChart2y",value:function(){this.resolution="2y",this.updateChart()}},{key:"updateChart5y",value:function(){this.resolution="5y",this.updateChart()}},{key:"updateChartCustom",value:function(e){this.resolution="5y",this.updateChart(!0)}},{key:"updateDateA",value:function(e){this.setState({dateA:e.target.value})}},{key:"updateDateB",value:function(e){this.setState({dateB:e.target.value})}},{key:"render",value:function(){var e={labels:this.state.labels,datasets:Object.values(this.state.datasets)};return o.a.createElement("div",{className:"modal fade",id:"modal-graph-"+this.props.k,tabIndex:"-1",role:"dialog","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title"},this.props.name," performance"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement(p.a,{width:100,height:50,options:{maintainAspectRatio:!0},data:e}),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-2 text-center"},o.a.createElement("button",{onClick:this.updateChart1m,type:"button",className:"btn btn-info"},"1 month")),o.a.createElement("div",{className:"col-lg-2 text-center"},o.a.createElement("button",{onClick:this.updateChart3m,type:"button",className:"btn btn-info"},"3 months")),o.a.createElement("div",{className:"col-lg-2 text-center"},o.a.createElement("button",{onClick:this.updateChart6m,type:"button",className:"btn btn-info"},"6 months")),o.a.createElement("div",{className:"col-lg-2 text-center"},o.a.createElement("button",{onClick:this.updateChart1y,type:"button",className:"btn btn-info"},"1 year")),o.a.createElement("div",{className:"col-lg-2 text-center"},o.a.createElement("button",{onClick:this.updateChart2y,type:"button",className:"btn btn-info"},"2 years")),o.a.createElement("div",{className:"col-lg-2 text-center"},o.a.createElement("button",{onClick:this.updateChart5y,type:"button",className:"btn btn-info"},"5 years"))),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("strong",null,"Custom time frame:")," from \xa0",o.a.createElement("input",{type:"date",onChange:this.updateDateA,value:this.state.dateA})," \xa0 to \xa0",o.a.createElement("input",{type:"date",onChange:this.updateDateB,value:this.state.dateB,min:b(f(this.state.dateA)+6048e5)})," \xa0",o.a.createElement("button",{type:"button",className:"btn btn-info",onClick:this.updateChartCustom},"View")))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",id:"modal-graph-close-"+this.props.k},"Close")))))}}]),t}(o.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deletePortfolio=a.deletePortfolio.bind(Object(c.a)(Object(c.a)(a))),a.showInEuros=a.showInEuros.bind(Object(c.a)(Object(c.a)(a))),a.showInDollars=a.showInDollars.bind(Object(c.a)(Object(c.a)(a))),a.rename=a.rename.bind(Object(c.a)(Object(c.a)(a))),a.addStock=a.addStock.bind(Object(c.a)(Object(c.a)(a))),a.selectStock=a.selectStock.bind(Object(c.a)(Object(c.a)(a))),a.deleteStocks=a.deleteStocks.bind(Object(c.a)(Object(c.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"deletePortfolio",value:function(e){this.props.deleteHandler(this.props.k)}},{key:"showInEuros",value:function(e){e.preventDefault(),this.props.setCurrencyHandler(this.props.k,"\u20ac")}},{key:"showInDollars",value:function(e){e.preventDefault(),this.props.setCurrencyHandler(this.props.k,"$")}},{key:"rename",value:function(e){this.props.renameHandler(this.props.k,e)}},{key:"addStock",value:function(e,t){if(this.props.isCorrectSymbolHandler(e)){var a={};for(var n in this.props.stocks)a[n]=this.props.stocks[n];if(!this.props.stocks.hasOwnProperty(e)){if(Object.values(this.props.stocks).length>=50)return;a[e]={},a[e].value=this.props.getStockValueHandler(e),a[e].quantity=0,a[e].selected=!1}a[e].quantity+=+t,this.props.setStocksHandler(this.props.k,a)}}},{key:"selectStock",value:function(e,t){this.props.selectHandler(this.props.k,e,t)}},{key:"deleteStocks",value:function(){this.props.deleteStocksHandler(this.props.k)}},{key:"render",value:function(){var e=this,t=Object.entries(this.props.stocks).map(function(t){return o.a.createElement(y,{name:t[0],key:t[0],value:t[1].value,quantity:t[1].quantity,selected:t[1].selected,currency:e.props.currency,rate:e.props.rate,selectHandler:e.selectStock})}),a=Object.values(this.props.stocks).reduce(function(t,a){return t+a.value*a.quantity*e.props.rate},0).toFixed(2),n=Object.entries(this.props.stocks).filter(function(e){return e[1].selected}).length>0;return o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{style:{padding:"0.5em",margin:"0.5em",boxShadow:"0px 0px 10px grey"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4 font-weight-bold"},o.a.createElement("h5",null,this.props.name)),o.a.createElement("div",{className:"col-lg-1"},o.a.createElement("button",{className:"btn btn-info btn-sm","data-toggle":"modal","data-target":"#modal-rename-"+this.props.k},o.a.createElement("span",{className:"oi oi-pencil"}))),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement("button",{className:"btn btn-link",type:"button",onClick:this.showInDollars},"Show in $")),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement("button",{className:"btn btn-link",type:"button",onClick:this.showInEuros},"Show in \u20ac")),o.a.createElement("div",{className:"col-lg-1"},o.a.createElement("button",{className:"btn btn-danger btn-sm font-weight-bold float-right",onClick:this.deletePortfolio},"\xd7"))),o.a.createElement("br",null),o.a.createElement("table",{className:"table table-sm"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Unit value"),o.a.createElement("th",null,"Nb. of shares"),o.a.createElement("th",null,"Total value"),o.a.createElement("th",null,"Select"))),o.a.createElement("tbody",null,t)),o.a.createElement("p",null,"Total value of ",this.props.name," : ",a,this.props.currency),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-3"},o.a.createElement("button",{className:"btn btn-success","data-toggle":"modal","data-target":"#modal-addstock-"+this.props.k},"Add stock")),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement("button",{className:"btn btn-info","data-toggle":"modal","data-target":"#modal-graph-"+this.props.k},"Graph")),o.a.createElement("div",{className:"col-lg-6 text-right"},o.a.createElement("button",{className:"btn btn-warning",onClick:this.deleteStocks,disabled:!n},"Delete selected")))),o.a.createElement(v,{k:this.props.k,initialName:this.props.name,renameHandler:this.rename}),o.a.createElement(E,{k:this.props.k,addStockHandler:this.addStock,isCorrectSymbolHandler:this.props.isCorrectSymbolHandler}),o.a.createElement(g,{k:this.props.k,name:this.props.name,stocks:this.props.stocks}))}}]),t}(o.a.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={portfolios:[],portfolioCounter:0},a.stocksData={},a.USDtoEUR=1,a.addPortfolio=a.addPortfolio.bind(Object(c.a)(Object(c.a)(a))),a.deletePortfolio=a.deletePortfolio.bind(Object(c.a)(Object(c.a)(a))),a.renamePortfolio=a.renamePortfolio.bind(Object(c.a)(Object(c.a)(a))),a.setStocks=a.setStocks.bind(Object(c.a)(Object(c.a)(a))),a.setCurrency=a.setCurrency.bind(Object(c.a)(Object(c.a)(a))),a.isCorrectSymbol=a.isCorrectSymbol.bind(Object(c.a)(Object(c.a)(a))),a.getStockValue=a.getStockValue.bind(Object(c.a)(Object(c.a)(a))),a.selectStock=a.selectStock.bind(Object(c.a)(Object(c.a)(a))),a.deleteStocks=a.deleteStocks.bind(Object(c.a)(Object(c.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"refreshSymbolsList",value:function(){var e=this;console.log("Refreshing symbols list..."),fetch("https://api.iextrading.com/1.0/tops/last").then(function(e){return e.json()}).then(function(t){e.stocksData=Object.values(t).reduce(function(e,t){return e[t.symbol]=t.price,e},{})},function(e){alert("Error while retrieving stocks symbols list...")})}},{key:"refreshCurrencyRate",value:function(){var e=this;fetch("http://data.fixer.io/api/latest?access_key=c2ee9ab174d4f390e2dd97796eb51968&symbols=USD").then(function(e){return e.json()}).then(function(t){e.USDtoEUR=t.success?1/t.rates.USD:1,console.log("cur : "+e.USDtoEUR)},function(e){alert("Error while retrieving currencies rates.")})}},{key:"componentDidMount",value:function(){var e=this;this.refreshCurrencyRate(),this.refreshSymbolsList(),this.symbolRefreshId=setInterval(function(){return e.refreshSymbolsList()},3e5),this.rateRefreshId=setInterval(function(){return e.refreshCurrencyRate()},36e5);var t=localStorage.getItem("state");null!==t&&this.setState(JSON.parse(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.symbolRefreshId),clearInterval(this.rateRefreshId)}},{key:"saveState",value:function(){"undefined"!==typeof Storage&&localStorage.setItem("state",JSON.stringify(this.state))}},{key:"addPortfolio",value:function(e){var t=this;this.state.portfolios.length<10&&this.setState({portfolios:[].concat(this.state.portfolios,{key:this.state.portfolioCounter,name:"Portfolio "+(this.state.portfolioCounter+1),currency:"\u20ac",rate:this.USDtoEUR,stocks:{}}),maxPortfolios:this.state.portfolios.length<10,portfolioCounter:this.state.portfolioCounter+1},function(){t.saveState()})}},{key:"deletePortfolio",value:function(e){var t=this;this.setState({portfolios:this.state.portfolios.filter(function(t){return t.key!==e}),maxPortfolios:this.state.portfolios.length<10},function(){t.saveState()})}},{key:"renamePortfolio",value:function(e,t){var a=this;this.setState({portfolios:this.state.portfolios.map(function(a){return a.key===e&&(a.name=t),a})},function(){a.saveState()})}},{key:"setStocks",value:function(e,t){var a=this;this.setState({portfolios:this.state.portfolios.map(function(a){return a.key===e&&(a.stocks=t),a})},function(){a.saveState()})}},{key:"setCurrency",value:function(e,t){var a=this;this.setState({portfolios:this.state.portfolios.map(function(n){return n.key===e&&(n.currency=t,n.rate="\u20ac"===t?a.USDtoEUR:1),n})},function(){a.saveState()})}},{key:"selectStock",value:function(e,t,a){this.setState({portfolios:this.state.portfolios.map(function(n){return n.key===e&&Object.entries(n.stocks).map(function(e){return e[0]===t&&(e[1].selected=a),e}),n})})}},{key:"deleteStocks",value:function(e){var t=this;this.setState({portfolios:this.state.portfolios.map(function(t){return t.key===e&&(t.stocks=function(e){var t={};return Object.entries(e).map(function(e){return e[1].selected||(t[e[0]]=e[1]),e}),t}(t.stocks)),t})},function(){t.saveState()})}},{key:"isCorrectSymbol",value:function(e){return this.stocksData.hasOwnProperty(e)}},{key:"getStockValue",value:function(e){return this.isCorrectSymbol(e)?this.stocksData[e]:0}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.portfolios.length;a+=2){var n=this.state.portfolios.slice(a,a+2).map(function(t){return o.a.createElement(C,{key:t.key,k:t.key,name:t.name,currency:t.currency,stocks:t.stocks,rate:t.rate,deleteHandler:e.deletePortfolio,renameHandler:e.renamePortfolio,setStocksHandler:e.setStocks,setCurrencyHandler:e.setCurrency,isCorrectSymbolHandler:e.isCorrectSymbol,getStockValueHandler:e.getStockValue,selectHandler:e.selectStock,deleteStocksHandler:e.deleteStocks})});t.push(o.a.createElement("div",{className:"row",key:this.state.portfolios.length+a},n))}return o.a.createElement("div",null,o.a.createElement(k,{text:"Add new portfolio",clickHandler:this.addPortfolio,disabled:this.state.portfolios.length>=10}),t)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(216)},73:function(e,t,a){}},[[68,2,1]]]);
//# sourceMappingURL=main.e93fb017.chunk.js.map