import firebase from 'react-native-firebase';

export function addFood(food, addComplete){
    firebase.firestore().collection(
        "Foods"
    ).add({
        name: food.name,
        color: food.color,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));

}

export async function getFoods(foodsRetreived){

    var foodList =[];

    async snapshot = await firebase.firestore()
    .collection("Foods")
    .orderBy("createdAt")
    .get()

    snapshot.forEach((doc) => {
        foodList.push(doc.data());
    });
    foodsRetreived(foodList);
}