//RETURN FRUIT

async function getFruitsData() {
    const response = await fetch(`https://www.fruityvice.com/api/fruit/all`);
    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

export default getFruitsData
