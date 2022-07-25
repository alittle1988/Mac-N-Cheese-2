let steps = ['Take large cutting board and Chef Knife/ Slap Chop finely dice 2 Jalapeno, 5 Garlic Cloves, 1 Red Bell Pepper, 1 Green Bell Pepper, and 1 Yellow Onion. Set aside. approximate cooking time (1-5 Minutes).',
 ' Pre-heat Large Saute Pan on the Stove Top at medium heat.',
  ' Place 10 strips of bacon in the pan & season them lightly with black pepper (~0.25 tsp on each side).',
   'Cook at medium heat until the bacon is crispy. Regularly flip the bacon & rotate strips between the center & edges of the pan.(approximate cooking time 3-5 Minutes)', 
   'Cover a small plate with a folded paper towel. With tongs, set the bacon strips on the towel-covered plate.',
    'Cover the bacon with a folded paper towel, & pat dry (carefully...do not touch hot oil).',
    ' Drain all but 1 Tbsp of the bacon grease from the large saute pan into an aluminum foil bowl.',
    'Add the diced fruits & vegetables from Step 1 into the large saute pan.',
    ' Cook at medium heat until the onion begins to carmelize. Remove from heat. approximate cook time (9 Minutes).',
    ' Chop the fried bacon into 1/4" chunks.',
    'Fill pot with water until the water level is 2-3 inches away from the rim of the pot. Add 1 tsp salt.',
    'Bring to a boil on high heat. approximate cook time (4 minutes).',
    'Add 1 lb medium shell pasta, and boil on high heat until al dente. approximate cook time (9 Minutes).',
    ' if not pre-shredded. Shred the cheese and mix it together. approximate cook time (10 minutes).',
    'Strain the pasta.',
    'In a large stock pot Whisk together 1/4 cup water, 1/2 cup flour, and 1 tbsp powdered mustard.',
    ' Cook 1 minute on medium heat.',
    ' Add 2 cups heavy whipping cream, 2 cups milk, 1 bay leaf, 0.5 tsp thyme, & 1 tsp paprika. Heat the mixture on medium heat until it is just below a boil.',
    'Preheat the oven to 375° F.',
    'Use tongs, remove & discard the bay leaf.',
    'Mix 1 egg with 1 tbsp of the mixture from the large stock pot. Then mix in 1 more tbsp.',
    'Slowly whisk in 3/4 of the shredded cheese, then the egg mixture.',
    'Stir in 1 tsp black pepper, 1 tsp cayenne pepper, 1 tsp salt, the fried fruits & vegetables, & 2/3 of the chopped fried bacon.',
    ' Sitr in the strained pasta from Step 15.',
    'Pour in the mixture from the large sauce pan, then cover with the remaining shredded cheese.',
    'Melt 4 tbsp butter on medium heat.',
    'Cover with the bread crumb mixture.',
    ' Cover with a glass lid or foil',
    'Bake in the oven at 375° F for 30 minutes.',
    'Let cool, serve']
let stepNum = [];
for (let i = 1; i < 31; i++) {
    stepNum.push('Step ' + i)
}
let index = 0;

let stepHead = document.querySelector('.stepHead');
let stepText = document.querySelector('.stepText');
const button = document.querySelector('.nextStep');



function moveSteps() {
    if(index < steps.length){
        stepText.style.display = 'block';
    stepHead.textContent = stepNum[index];
    stepText.textContent = steps[index]
    button.textContent = 'Next Step';
    index = index + 1;
} else {
    stepHead.remove();
    stepText.textContent = 'Time to Taste!';
    document.querySelector('.closing').style.display = 'block'
}
    
}

button.addEventListener('click', moveSteps)




