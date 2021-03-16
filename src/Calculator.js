function Calculator(){
    return (
        <div class="container">
		<div class="row">
			<div class="col-md-12 right top-border"><span>0</span></div>
		</div>
		<div class="row">
			<div class="col-xs-3 col-sm-3 col-md-3 color1 ">AC</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1 ">-/+</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1 ">%</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1 color"><span>÷</span></div>
		</div>
		<div class="row">
			<div class="col-xs-3 col-sm-3 col-md-3 width color1">7</div>
			<div class="col-xs-3 col-sm-3 col-md-3 width color1">8</div>
			<div class="col-xs-3 col-sm-3 col-md-3 width color1">9</div>
			<div class="col-xs-3 col-sm-3 col-md-3 width color1 color"><span>x</span></div>
		</div>
		<div class="row">
			<div class="col-xs-3 col-sm-3 col-md-3 color1">4</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1">5</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1">6</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1 color"><span>-</span></div>
		</div>
		<div class="row">
			<div class="col-xs-3 col-sm-3 col-md-3 color1">1</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1">2</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1">3</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1 color"><span>+</span></div>
		</div>
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-6 color1">0</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1">.</div>
			<div class="col-xs-3 col-sm-3 col-md-3 color1 color border-bottom"><span>=</span></div>
		</div>

	</div>
    )
}
export default Calculator;