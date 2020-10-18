import HikeModel from "./hikeModel.js";
import HikesView from "./hikesView.js";

export default class HikeController {
	constructor(parentId) {
		//parentId is ul from team.html
		this.parentElement = document.getElementById(parentId);
		this.hikeModel = new HikeModel();
		this.hikesView = new HikesView(parentId);
	}
	showLightHikeList() {
		let listElement = document.createElement("li");
		
		listElement = this.hikesView.renderLightHikeList(
			this.hikeModel.getAllHikes(),
			listElement
		);
		try {
			this.parentElement.innerHTML = listElement.innerHTML;
		} catch (err) {
			console.log(err.message + ">>hikeController.js line 18");
		}
	}
	addHikeListener() {
		//iterate over list items in parent ul, and add event listener to each one with event "click" to expand the details of that one hike.
		//making ul into an array to be able to iterate over it - not working yet
		const arrParent = Array.from(this.parentElement.querySelectorAll('li'));
		const that = this;
		//for (const hike of arrParent) {
		//	console.log(hike);
		//	hike.addEventListener('click', this.parentElement.showOneHike);
		//}
		arrParent.forEach(hike => that.hike.addEventListener('click', this.showOneHike));
	}
	showOneHike(hikeName) {
		try {
			
			const expandedHike = this.getHikeByName(this.firstChild.innerHTML);
			//const hike = this.getHikeByName(hikeName.path);
			//console.log(hikeName.path.li);
			//const currList = hikeName.path;
			//currList.filter((i) => {
			//	if (hikeName[i] == ) {
			//		console.log('yes');
			//	}
			//});
			//this.hikesView.renderExpandedHike(
			//	this.hikeModel.getHikeByName(hikeName),
			//	this.parentElement
			//);
		} catch (err) {
			alert(err.message + " " + err.log);
		}
	}
	//
	// idea - that we ran out of time on
	//showDifficultyHikes(diff) {
	//this.hikeModel.getHikeByDifficulty(diff);
	//this.hikesView.renderHikeList(this.hikeModel, this.parentElement);
	//}
}
