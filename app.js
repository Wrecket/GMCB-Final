const name = document.getElementById('name');
const ingredients = document.getElementById('ingredients');
const recipe = document.getElementById('recipe');
const image = document.getElementById('image');
const mains = document.querySelector('#clicker');
const background = document.querySelector('#background');
const remove = document.getElementById('remove');
const margin = document.querySelector('.mover');

console.log('connected');

const recipes = {
	ging  : {
		name        : 'Sticky Ginger Cake',
		ingredients :
			'<span class="bold">Ingredients</span><br><br> <ol class="recipe-ing"><li>50g/20oz Butter</li><li>200g/8oz Stoned dates</li><li>300g/10oz Dark muscado sugar</li><li>2 eggs</li><li>50g/2oz Root ginger grated (2tsp)</li><li>Grated zest of a lemon</li><li>200g/8oz SR Flour</li><li>1 Bramley apple (9oz) peeled and chopped</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li> Butter and line a 20cm round cake tin</li><li>Put dates in bowl and cover with boiling water</li><li>Heat butter in a pan and stir in the sugar. Allow to cool slightly</li><li>Beat in the eggs, ginger and lemon zest, then drain the dates, add to pan and mix well</li>                   <li>Stir in the flour then apples</li>                  <li>Spoon into cake tin, put cake on baking tray to stop the base browning too much.</li>                   <li>cook on gas 4/160 deg for 1 1/2 hours. If not cooked, cover with foil and cook for 15-30 mins more.</li>                   <li>Allow to cool in tin, then melt white chocolate drizzle over cake.</li></ul>',
		image       : "<img src='img/GingerSticky.jpg' class='rec-pic' alt='sticky ginger cake' style='width: 100%'>",
		cooks : "90 mins",
		temperature: "Gas 4/160 Deg"
	},

	carr  : {
		name        : 'Carrot Cake',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>9oz SR flour</li><li>2 tsp Cinnamon</li><li>8oz Brown sugar - soft or demerara</li><li>4oz Coconut</li><li>6 oz Sultanas</li><li>2 eggs</li><li>1/2 tsp Vanilla</li><li>4oz Butter/Margerine</li><li>4oz Veg oil</li><li>4oz Grated carrots</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Preheat oven 160 deg/gas 4</li><li>Mix all dry ingredients together</li><li>Beat the eggs, vanilla, butter/margerine, and veg oil together</li><li>Add dry ingredients</li><li>Add grated carrots</li><li>Put in tin and sprinkle with demerara sugar</li><li>Cook for 1 to 1 1/2 hours</li></ul>',
		image       : "<img src='img/carrot2.jpg' class='rec-pic' alt='carrot cake' style='width: 100%'>",
		cooks : "60/90 mins",
		temperature: "Gas 4/160 Deg"
	},

	pine  : {
		name        : 'Pineapple Cake',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>1/2 Cup of butter, softened</li><li>1 Cup or sugar</li><li>1/4 tsp Sale</li><li>1/4 tsp Bicarbonate of soda</li><li>2 eggs</li><li>1 1/2 Cups of flour</li><li>1/4 Cup of crushed pineapple, well drained</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Preheat oven to gas 4</li><li>Mix together butter, sugar and eggs in a large bowl.</li><li>Beat in flour, bicarbonate of soda and salt.</li><li>Stir in pineapple.</li><li>Spread into a 9x9 square tin for bars, or into cupcake shells.</li><li>Cook gas 4 for 40/45 mins.</li><li>Drizzle with lemon icing.</li></ul>',
		image       : "<img src='img/pineapplecake.jpg' class='rec-pic' alt='pineapple cake' style='width: 100%'>",
		cooks : "45 mins",
		temperature: "Gas 4/160 Deg"
	},

	iced  : {
		name        : 'Iced Cream Buns',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>2 tsp or 17g Pack dried yeast</li><li>4 floz Warm water</li><li>2 1/2 oz Sugar</li><li>4 floz Warm milk</li><li>2 1/2 oz Butter melted (weight first)</li><li>1 tsp Salt</li><li>1 Egg, slightly beaten</li><li>20 oz Bread flour</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Put flour in stand mixer bowl with yeast on one side, salt on the other</li><li>Mix together milk, egg, melted butter and 3 oz of warm water</li><li>Add sugar to flour and yeast then mix for a few seconds</li><li>Add the liquid - might need a litle more warm water</li><li>Put mixer on for 3 minutes, adding a little more water if needed</li><li>Put in large greased bowl and leave to double in size</li><li>Cut dough into about 15 pieces and place onto a greased baking tray then leave to double in size</li><li>Cook in preheated oven, 180 deg/Gas 4 for 20 mins then add plain iced glaze on top</li></ul>',
		image       : "<img src='img/icedcreambun.jpg' class='rec-pic' alt='iced cream buns' style='width: 100%'>",
		cooks : "20 mins",
		temperature: "Gas 4/180 Deg"
	},

	toff  : {
		name        : 'Sticky Toffee Pudding',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>225g Dates</li><li>175ml Boiling water</li><li>1tsp Vanilla</li><li>1 tsp Bi carbonate of soda</li><li>175g S.R Flour</li><li>2 Eggs</li><li>85g Butter</li><li>100ml Milk</li><li>140g demorara sugar</li></ol><p><span class="bold">Toffee Sauce</span></p><ol><li>175kg Dark brown sugar</li><li>50g Butter</li><li>225ml Double cream</li><li>1 tbsp Black treacle</li></ol>',
		recipe      :
			"<span class='bold'>Method</span><br><br><ul class='recipe-recipe'><li>Soak dates in boiling water.</li><li>Mix flour and Bicarbonate of soda.</li><li>Beat eggs.</li><li>Beat butter and sugar until creamy, then add eggs a little bit at a time.</li><li>stir in treacle then fold in 1/3 of the flour, 1/2 the milk, then repeat until used.</li><li>Stir in soaked dates *note* may look curdled (it isn't)</li><li>Spoon into mini pudding basins.</li><li>Cook gas 4 for 20 - 25 mins.</li></ul><p><br><span class='bold'>Sauce</bold></p><ul class='recipe-recipe'><li>Put butter and sugar in a pan with 1/2 the cream and bring it to boil</li><li>Stir until sugar has dissolved, then stir in treacle and bubble for a few minutes.</li><li>Take off heat and beat in rest of cream.</li></ul>",
		image       : "<img src='img/stickytoffee.jpg' class='rec-pic' alt='sticky tofee pudding' style='width: 100%'>",
		cooks : "25 mins",
		temperature: "Gas 4/180 Deg"
	},

	crus  : {
		name        : 'Crusty Puff Pies',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>150g Button mushrooms</li><li>4 Skinless cooked chicken breast</li><li>100g Cooked ham</li><li>350g/12oz Freshly made cheese sauce</li><li>1 Onion chopped</li><li>300g Puff pastry</li><li>2 tbsp Milk</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Thickly slice mushroom then fry in butter with the onion</li><li>Cut cooked chicken into chunks</li><li>Roughly cut ham</li><li>Pur the cheese sauce over the mushrooms, chicken, ham and (placeholder) then mix well.</li><li>Make pies using puff pastry and fill</li><li>Cook on gas 6 for 15 minutes or until ready.</li></ul> ',
			image       : "<img src='img/crustypuff.jpg' class='rec-pic' alt='crusty puff pies' style='width: 100%'>",
			cooks : "15 mins",
			temperature: "Gas 6/200 Deg"
	},

	mush  : {
		name        : 'Wild Mushroom Wafer',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>3oz Butter/Margerine</li><li>500g Puff pastry</li><li>3oz Grated parmesan</li><li>8oz Chopped onions</li><li>1lb Mixed mushrooms</li><li>1/4pt Wine</li><li>3/4pt Veg or chicken stock</li><li>1/2 pt double cream</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li> Roll out pastry to 9" x 13" then cut into rounds.</li><li>Brush rounds with melted butter and sprinkle with cheese, then chill for 30 mins.</li><li>Bake gas 7 for 15 mins but do not crowd. cool, then split into two</li><li>Heat remaining butter, cook onions until soft then add mushrooms. cook for 5 mins then add wine and stock, then bring to boil.</li><li>Remove mushrooms.</li><li>Stir in cream and bring to boil, let bubble for 20 mins until syrupy, season to taste. </li><li>Return mushrooms to pan  and warm through, then spoon onto pastry base and put top on.</li></ul>',
			image       : "<img src='img/shroomwafer.jpg' class='rec-pic' alt='wild mushroom wafer' style='width: 100%'>",
			cooks : "30 mins",
			temperature: "N/A"
	},
	piri  : {
		name        : 'Piri Piri Chicken Sauce',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>70ml veg oil</li><li>70ml White wine vinegar</li><li>1/2 Large pepper chopped</li><li>2 Garlic cloves</li><li>3-4 Hot chillies with seed sin, chopped</li><li>1 tsp salt</li><li>1/2 tsp oregano</li><li>Juice of half a lemon</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Chop roughly, put all in saucepan</li><li>Bring to simmer and cook for 20 minutes</li><li>Blend all into smooth sauce with hand blener</li></ul>',
			image       : "<img src='img/Piri.jpg' class='rec-pic' alt='Piri Piri sauce' style='width: 100%'>",
			cooks : "20 mins",
			temperature: "N/A"
	},
	mpast : {
		name        : 'Creamy Mushroom Pasta',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>2 tbsp Butter</li><li>8oz Mushrooms</li><li>2 Cloves of garlic</li><li>1/3 cup White wine</li><li>1 cup Single cream</li><li>1/2 Pint Vegtable stock (1 Vegtable stock cube)</li><li>1 tbsp Balsamic vinegar</li><li>Salt and pepper to taste</li><li>2/3 Pot mascarpone</li><li>8oz Pasta of choice (140g for 2 people)</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Whilst pasta is cooking, melt butter and garlic then combine with mushrooms. (5 - 8 mins)</li><li>Add wine, cream, veg stock, balsamic vinegar, mascapone, and bring to boil.</li>               <li>Leave to simmer for a few minutes until sauce has thickened.</li><li>Add salt and pepper to taste.</li><li>Pour over cooked pasta then sprinle with cheese (if needed)</li><li>Can also add 1/2 jar of sund ried tomatoes ot thicken sauce with flour.</li></ul>',
			image       : "<img src='img/mushpast.jpg' class='rec-pic' alt='Mushroom pasta' style='width: 100%'>",
			cooks : "20 mins",
			temperature: "N/A"
	},
	pitt  : {
		name        : 'Spicy Chicken Pitta Filling',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>4 Chicken thighs or 2 Large breasts</li><li>1/4 lb Mushrooms</li><li>1 Onion chopped</li><li>1 Garlic clove crushed</li><li>2 tsp harrisa</li><li>1/2 tsp Cajun</li><li>1/4 tsp Ginger</li><li>2 tbsp Sweet chilli</li><li>3 Desert spoons of sour cream</li><li>Chopped jalapenos</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Cook onion until soft, then add garlic and cook for a few minutes</li><li>remove onion and garlic from heat and cook chicken pieces for 6 to 8 minutes</li><li>add cooked garlic and onion, then add the rest of the ingredients all in together</li><li>Serve with flatbreads or tortillas</li></ul>',
			image       : "<img src='img/chickenpitta.jpg' class='rec-pic' alt='pitta filling' style='width: 100%'>",
			cooks : "8 mins",
			temperature: "N/A"
	},
	gbre  : {
		name        : 'Cheesey Garlic Bread',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>1 Baguette</li><li>1/2 Cup butter 115g</li><li>4 Cloves of garlic (minced)</li><li>1/3 cup Spring onion 35g</li><li>1/3 cup Parmesan cheese 35g</li><li>1/3 cup Dutch grated cheese 35g</li><li>1/3 cup cheddar cheese 35g</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Pre-heat oven to gas 6/200deg</li><li>Combine all ingredients except bread and mix until smooth</li><li>Slice baguette in half lengthwaysand spread mix evenly.</li><li>Place a tray lined with parchment and bake for 15 mins</li><li>Slice, cool and serve.</li></ul>',
		image       : "<img src='img/gbread.jpg' alt='garlic bread' class='rec-pic' style='width: 100%'>",
		cooks : "15 mins",
		temperature: "Gas 6/200 Deg"
	},
	roll  : {
		name        : 'Pumpkin Seed Rolls',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>200g SR white B/Flour</li><li>75g St. Six Seed B/Flour</li><li>Sachet yeast</li><li>5g Salt</li><li>100g Sweet Potato grated</li><li>2 tbsp balsamic vinegar</li><li>50g Pumpkin seeds + extra barley</li><li>50g Feta, crumbled</li><li>Beaten Egg</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Put flour, yeast, salt, sweet potato, balsamic and 130g warm water into a bowl with dough hook, mix briefly</li><li>Add seeds and feta, then knead till pixed.</li>               <li>Place in oiled bowl then leave until doubled.</li><li>Knock back, dividing into rolls, then place rolls on a lined tray and cover. Allow to rise until doubled.</li><li>Preheat over to gas 7, glaze rolls with egg, sprinkle with seeds and cheese, then cook for 15 mins.</li></ul>',
		image       : "<img src='img/sweetpotrolls.jpg' class='rec-pic' alt='sweet potato rolls' style='width: 100%'>",
		cooks : "15 mins",
		temperature: "Gas 7"
	},
	pate  : {
		name        : 'Chicken liver pate',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>1 Small onion</li><li>4-5 Rashers of streaky bacon</li><li>300g Chicken Livers</li><li>3 tbsp Port/Brandy</li><li>80 to 100ml Double Cream</li><li>1/2 tsp Dried parsley</li><li>1/2 tsp Salt</li><li>1/2 tsp Pepper</li><li>1 tbsp Butter</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Cook onion until soft.</li><li>Add bacon and cook for 4 minutes.</li>               <li>Add Chicken livers and cook until they chance coloyr.</li><li>Pour in the port/brandy and allow to cook down.</li><li>Add cream, salt, pepper and parsely, then cook until liver is cooked.</li><li>Place in food processor with the butter and process until smooth.</li><li>Push cling wrap down on it and put in fridge for 24 hours.</li></ul>',
		image       : "<img src='img/pate.jpg' alt='chicken liver pate' class='rec-pic' style='width: 100%'>",
		cooks : "4 mins",
		temperature: "N/A"
	},
	quic  : {
		name        : 'Mini Quiches',
		ingredients :
			'<span class="bold">Ingredients</span><br><br><ol><li>1 Roll of puff pastry/shortcrust</li><li>4oz Strong cheddar</li><li>2 Eggs</li><li>4 oz Double Cream</li><li>Milk (enough that combined with cheese/eggs/double cream to make 12oz)</li><li>4 Rashers of bacon, cooked and chopped</li><li>1 Onion chopped and cooked in microwave</li></ol>',
		recipe      :
			'<span class="bold">Method</span><br><br><ul class="recipe-recipe"><li>Grease a 12 hole muffin tin and line with pastry</li><li>Add small amount of bacon, cooked onion and cheese.</li><li>Pour over egg mix to almost full</li><li>Bake in hot oven (200 deg gas 6) for 20 minutes.</li></ul>',
		image       : "<img src='img/quiche.jpg' alt='mini quiche' class='rec-pic' style='width: 100%'>",
		cooks : "20 mins",
		temperature: "Gas 6/200 Deg"
	}
};

document.querySelectorAll('#clicker').forEach((item) => {
	item.addEventListener('mouseover', function() {
		background.classList.remove('background');
		background.classList.add('background2');
	});
});

document.querySelectorAll('#clicker').forEach((item) => {
	item.addEventListener('mouseout', function() {
		background.classList.add('background');
		background.classList.remove('background2');
	});
});

document.querySelectorAll('.buttonx').forEach((item) => {
	item.addEventListener('mouseover', function() {
		this.classList.remove('fader');
	});
});


document.querySelectorAll('.buttonx').forEach((item) => {
	item.addEventListener('mouseout', function() {
		this.classList.add('fader');
	});
});

document.querySelectorAll('.buttonx').forEach((item) => {
	item.addEventListener('click', function() {
		this.classList.add('animate__pulse');
		setTimeout(() => {
			this.classList.remove('animate__pulse');
		}, 2000);
	});
});

function recipecard(id) {
	const r = recipes[id];
	name.innerHTML = r.name;
	ingredients.innerHTML = r.ingredients;
	ingredientsmob.innerHTML = r.ingredients;
	recipe.innerHTML = r.recipe;
	image.innerHTML = r.image;
	cooks.innerHTML = r.cooks;
	temp.innerHTML = r.temperature;

	
}

document.querySelectorAll('.buttonx').forEach((item) => {
	item.addEventListener('click', function() {
		obj = this.id;
		recipecard(obj);		
	});
});

document.querySelectorAll('.buttonx').forEach((item) => {
	item.addEventListener('click', function() {
		hider();		
	});
});

function hider(){
	document.querySelectorAll(".hider").forEach((item) => {
		item.classList.remove("clickon");
	})
}