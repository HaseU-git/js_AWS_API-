// Js

// - 画面をデザインする人：　　　スギサキ
// - 画面HTMLを作る人
// - Jsで整形する人（map）：
// - Jsで整形する人（自分達）：
//     - APIを作る人：　　　　:w
// 　　　　ニシムラ


// HTMLとcssでベースを作る人

// javascriptでAPIを受け取ってHTML反映させる人



// お菓子の情報と体重の情報が欲しい


const run_distance = 10;
const body_weight = 80;
const point_rate = 0.1;

// const json_info =  
// {
//     user: 
//     {
//         weight: 70
//     },
//     food: 
//     {
//         name: "test_name",
//         kcal: 100
//     }
// }

function calculate_used_calories(body_weight, distance)
{
	return (body_weight * distance);
}

function calculate_new_points(used_calories, point_rate)
{
	return (used_calories * point_rate);
}


// console.log(run_distance)

// console.log(json_info.food.name)



// USER


// {
// 	ID: 
	
// }



// const url = "https://qiita.com/saka212/items/9b6cfe06b464580c2ee6";

// res = fetch(url);

// console.log(res);

// query_string = {user_name: "mori", used_calories: 300, new_points: 0};


api_uri = "https://jsonplaceholder.typicode.com/posts'";


function fetch_aws_api(api_uri="", json_info={})
{
	let ret = {msg: "", info: {}};

	if (api_uri == "" || json_info=={})
	{
	 	//エラー処理
		ret.msg = "error" 
	}

	// const myHeaders = new Headers();
	// myHeaders.append("Content-Type", "application/json");
	// const raw = JSON.stringify(json_info);

	// const requestOptions = {
	// 	method: 'POST',
	// 	headers: myHeaders,
	// 	body: raw,
	// 	mode: 'no-cors',
	// 	redirect: 'follow'
	// };

	const requestOptions = {
		method: 'POST',
		headers: 
		{
			'Accept': 'application/json',
			'Content-Type': 'application/json'

		},
		body: JSON.stringify(json_info),
	};

	fetch(api_uri, requestOptions)
	.then(response => response.json())
	// .then(result => ret.info = JSON.parse(result).body)
	.then(result => ret.info = result.body)
	.catch(error => ret.msg = "error");

	return (ret);
}

// 一つ目の処理の場合

let user_name = "";
let points = 0;

function fetch_user_info(api_uri="", user_name)
{
	json_info = 
	{
		"OperationType": "login",
		"Keys": {"Name": "Mori"}
	};
	res_hash = fetch_aws_api(api_uri, json_info);
	
	if (res_hash.msg == "error")
	{
		//エラー処理
	}
	else
	{
		user_name = res_hash.info.name;
		body_weight = res_hash.weight;
		points = res_hash.point;
	}
}

// 二つ目の処理の場合

let food_name = "";
let food_count = 0;
// let food_image = ????;


function fetch_food_info(api_uri="", used_calories=0, user_name="", new_point=0)
{
	json_info = 
	{
		"OperationType": "get_snack_num",
		"Keys": {
			"burned_calories": 50,
			"Name": "mori", 
			"updated_point": 100
		}
	};
	res_hash = fetch_aws_api(api_uri, json_info);
	
	if (res_hash.msg == "error")
	{
		//エラー処理
	}
	else
	{
		food_name = res_hash.info.name;
		food_count = res_hash.count;
		// image = res_hash.image;
	}
}
