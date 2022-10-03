function newImage(objName, url, position, left, bottom) {
		let object = document.createElement('img')
		object.alt = objName
		object.src = url
		object.style.position = position
		object.style.left = left + 'px'
		object.style.bottom = bottom + 'px'
		document.body.append(object)
		return object
}

function newItem (objName, url, position, left, bottom) {
		let object = newImage(objName, url, position, left, bottom)
		object.addEventListener('dblclick', () => {
				object.remove()
		})
}

newImage('green character', 'assets/green-character.gif', 'fixed', 100, 100);
newImage('tree' , 'assets/tree.png', 'fixed', 200, 300)
newImage('pine tree', 'assets/pine-tree.png', 'fixed', 450, 200)

newImage('ancient pillar','assets/pillar.png', 'fixed', 350, 100)
newImage('wooden crate', 'assets/crate.png', 'fixed', 150, 200)
newImage('well with bucket, rope, and crank', 'assets/well.png', 'fixed', 500, 425)

newItem('sword','assets/sword.png', 'fixed', 500, 405)
newItem('shield', 'assets/shield.png', 'fixed', 165, 185)
newItem('wooden staff','assets/staff.png', 'fixed', 600, 100)

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })


// window.innerHeight
// 245
// window.innerWidth
// 1024

function skyAndGrass(objName, url, position, left, bottom){
	let object = newImage(objName, url, position, left, bottom)
		for(let h = 0; h>windowHeight; h++){


		}
		document.body.append(object)
}

let windowHeight = window.innerHeight
let windowWidth = window.innerWidth

let skyHeight = window.innerHeight-grassHeight
let grassHeight = window.innerHeight-skyHeight



skyAndGrass('sky', 'assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
skyAndGrass('grass','assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


// skyAndGrass('grass', 'assets/grass.png', 'fixed', 0, 0)
// skyAndGrass('sky', 'assets/sky.png', 'fixed', 0, 425)