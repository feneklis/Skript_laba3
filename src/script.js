const korzina = 'korzina';

const add_element = (name, objectID) => {
    var pred_korzina = [];
	if (localStorage.getItem(korzina)){
		pred_korzina= JSON.parse(localStorage.getItem(korzina));
	}
    const index = pred_korzina.findIndex(element => element.objectID === objectID);

    if (index === -1) {
        const widget = {
            name,
            objectID,
            count: 1,
        };
		pred_korzina.push(widget);
		localStorage.setItem(korzina, JSON.stringify(pred_korzina));
    } else {
        pred_korzina[index].count++;
        localStorage.setItem(korzina, JSON.stringify(pred_korzina));
    }
};

const korzina_open = () => {
    const parent = document.getElementById(korzina);
    document.getElementsByClassName(korzina + '_open')[0].style.visibility = 'visible';

	const array = JSON.parse(localStorage.getItem(korzina));
	var index=0;
	for (var element of array){
		 const htmlelement = document.createElement('div');
       htmlelement.innerText = `${index + 1}. ${element.objectID} - ` + element.name + ` количество: ${element.count}.`;
       parent.appendChild(htmlelement);
	   index=index +1;
	}
};

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {
        document.getElementsByClassName(korzina + '_open')[0].style.visibility = 'hidden';
        document.getElementById(korzina).innerHTML = '';
    }
});