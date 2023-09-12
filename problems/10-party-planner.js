class PartyPlanner {
	constructor (guestList) {
		this.guestList = [];
	}
	addToGuestList(name) {
		this.guestList.push(name);
	}
	throwParty() {
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		}
		if (this.guestList.length === 1) {
			return `Welcome to the party ${this.guestList[0]}`
		}
		else {
			let names = this.guestList.join(" and ");
			return `Welcome to the party ${names}`
		}
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
