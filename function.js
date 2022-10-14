var login_url = 'nighoutLogin.html';
var Sign_up_url = 'sign UP.html';
var Home_url = 'nightOut.html';
function factory(name, place, type, price, alcool, withwho, rate, avg_rate) {
    var obj = {}
    obj.name = name,
        obj.place = place,
        obj.type = type,
        obj.price = price,
        obj.alcool = alcool,
        obj.withwho = withwho,
        obj.rate = rate,
        obj.avg_rate = avg_rate,
        filters.push(obj)

}

function User(log, pass, rated) {
    var obj = {}
    obj.log = log;
    obj.pass = pass;
    obj.rated = rated;
    users.push(obj)
}

var filters = [
    //gammarth


    { name: 'yuka', place: 'gammarth', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 3 },
    { name: 'zebra club', place: 'gammarth', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 2 },
    { name: 'jobi gammarth', place: 'gammarth', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 1 },
    { name: 'the secret garden', place: 'gammarth', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 4 },
    { name: 'billionaire', place: 'gammarth', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 5 },
    { name: 'the garrison', place: 'gammarth', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 3.5 },
    { name: 'ko bar club', place: 'gammarth', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 4.5 },
    { name: 'cassette', place: 'gammarth', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'bel-air', place: 'gammarth', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'bellini gammarth', place: 'gammarth', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'habibi', place: 'gammarth', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'la terrasse', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'heures vin', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'chez franky', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'la vague', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'la rambla', place: 'gammarth', type: 'restaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le rocher', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'khomsa', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'rosamel', place: 'gammarth', type: 'restaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'viranda', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'tangerine rooftop', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'la villa', place: 'gammarth', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'puro exclusive', place: 'gammarth', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'the sky', place: 'gammarth', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'beb bhar', place: 'gammarth', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'tiki bar', place: 'gammarth', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'wax', place: 'gammarth', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'pinata', place: 'gammarth', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le baril', place: 'gammarth', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'bora bora', place: 'gammarth', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'hakuna matata', place: 'gammarth', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'trinity', place: 'gammarth', type: 'event', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'the Rave', place: 'gammarth', type: 'event', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'mathame', place: 'gammarth', type: 'event', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },




    //sidibou


    { name: 'sidibou sky', place: 'sidi bou said', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'blu blu', place: 'sidi bou said', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le triplex', place: 'sidi bou said', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'coste', place: 'sidi bou said', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'cooks', place: 'sidi bou said', type: 'restaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'chez wled moufida', place: 'sidi bou said', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'dar zarrouk', place: 'sidi bou said', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le pirate', place: 'sidi bou said', type: 'restaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'tam tam', place: 'sidi bou said', type: 'restaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'falaise', place: 'sidi bou said', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le chergui', place: 'sidi bou said', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'the glift', place: 'sidi bou said', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'hotel sidi bou ', place: 'sidi bou said', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'bhar events', place: 'sidi bou said', type: 'event', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'am pm event', place: 'sidi bou said', type: 'event', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'exception event', place: 'sidi bou said', type: 'event', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },




    //tunis

    { name: 'm lounge', place: 'tunis', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'centre ville', place: 'tunis', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'taboo', place: 'tunis', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'chez gharnouk', place: 'tunis', type: 'resaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'chez slah', place: 'tunis', type: 'resaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'la salle a manger', place: 'tunis', type: 'resaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'pasta cosi', place: 'tunis', type: 'resaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'downtown', place: 'tunis', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'frida', place: 'tunis', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'duplex', place: 'tunis', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'bar taous', place: 'tunis', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'pure techno', place: 'tunis', type: 'event', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'hardcore msc', place: 'tunis', type: 'event', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },


    //hammamet


    { name: 'the club', place: 'hammamet', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'malibu', place: 'hammamet', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'o pub', place: 'hammamet', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'barbara', place: 'hammamet', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'jobi hammamet', place: 'hammamet', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'barberousse', place: 'hammamet', type: 'restaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le petit pecheur', place: 'hammamet', type: 'restaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'tweety', place: 'hammamet', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'capricio', place: 'hammamet', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'pergola', place: 'hammamet', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'the beach bar', place: 'hammamet', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'bar nassim', place: 'hammamet', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'atlas', place: 'hammamet', type: 'event', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'le jour j', place: 'hammamet', type: 'event', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'tulip', place: 'hammamet', type: 'event', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },




    //sousse

    { name: 'the saloon', place: 'sousse', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'criuse', place: 'sousse', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'zino', place: 'sousse', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'la marmite', place: 'sousse', type: 'restaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'aromate', place: 'sousse', type: 'restaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'mio mondo', place: 'sousse', type: 'restuarant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'the first', place: 'sousse', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'legends', place: 'sousse', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'jobi sousse', place: 'sousse', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: '007', place: 'sousse', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'maracas', place: 'sousse', type: 'event', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'exotic', place: 'sousse', type: 'event', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'fun event', place: 'sousse', type: 'event', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },




    //djerba


    { name: 'plaza sea', place: 'djerba', type: 'lounge', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'jobi djerba', place: 'djerba', type: 'lounge', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'dominos', place: 'djerba', type: 'lounge', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'oasis', place: 'djerba', type: 'restaurant', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'chez chouchou', place: 'djerba', type: 'restaurant', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'djerba nova', place: 'djerba', type: 'restaurant', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'didon', place: 'djerba', type: 'bar', price: 'low', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'sunset', place: 'djerba', type: 'bar', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'coco loco', place: 'djerba', type: 'bar', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

    { name: 'afrodite', place: 'djerba', type: 'event', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: 'royale', place: 'djerba', type: 'event', price: 'medium', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },
    { name: '365event', place: 'djerba', type: 'event', price: 'high', alcool: 'yes', withwho: 'friends', rate: [], avg_rate: 0 },

]



function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
        if (predicate(element, i)) {
            acc.push(element);
        }
    });
    return acc;
}
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}
function average_rate(array) {
    var rate = 0
    each(array, function (element) {
        rate = rate + element;

    })
    return rate / array.length
}

//the web site can only be accessible by logging in, this function makes that possible
// (the users have to put their username and password in order to access the site).
function logging(log, pass, url) {
    if (localStorage.getItem(log) === null) {
        $('#log_err').append($('<p>You dont have an account</p>'))
    }
    else {
        var x = window.localStorage.getItem(log)
        var user = JSON.parse(x)
        console.log(user.Login, user.Pass)
        if (log === user.Login && pass === user.Pass) {
            localStorage.setItem('logged', log)
            location.href = url
        }
        else {
            $('#log_err').append($('<p>Your account or password is wrong</p>'))
        }
    }
}

//this function makes it possible to make a user account for the site
//each user has to have a unique login.
function Sign_up(login, password, url) {
    if (localStorage.getItem(login) === null) {
        var User = { Login: login, Pass: password ,logged:login}

        
        window.localStorage.setItem(login, JSON.stringify(User));
        location.href = url
    }
    else {
        $('#log_err').append($('<p>This login already exists</p>'))
    }
}


//the function reservation makes it possible to book a reservation in any bar, lounge, restaurant or event.
//each user can only book a reservation once in each place since this site is designed to make last minute reservations only.
//each place has a capacity of only 10 people (we could've made a specific capacity for each place which would've
// been more realistic but we chose a small number so we could execute it in the demo) 
//which means user11 wont be able to book a table since the place is full.



function toprated(filters) {
    var rate_array = [filters[0].avg_rate, filters[1].avg_rate, filters[2].avg_rate, filters[3].avg_rate, filters[4].avg_rate]
    var array = [filters[0], filters[1], filters[2], filters[3], filters[4]]
    for (var i = 5; i < filters.length; i++) {
        if (filters[i].avg_rate > Math.min(...rate_array)) {
            var j = rate_array.indexOf(Math.min(...rate_array))
            rate_array[rate_array.indexOf(Math.min(...rate_array))] = filters[i].avg_rate //makweni
            array[j] = filters[i]
        }
    }
    for (var i = 0; i < rate_array.length; i++) {
        $('#all_cards').append($('<div id="card"><p id="name">' + rate_array[i].name + '</p><p id="place">' + rate_array[i].place + '</p><p id="type">' + rate_array[i].type + '</p><p id="price">' + rate_array[i].price + '</p><p id="partner">' + rate_array[i].withwho + '</p><p id="alcool">' + rate_array[i].alcool + '</p><p id="rate">' + rate_array[i].avg_rate + '</p><button class = "btn" id= '+rate_array[i].name+' >Book a place</button></div>'))
        

        
    }
}

// function reservation(factory_name) {

    
//     var i = 0
//     var reserved = false
//     var facto = localStorage.getItem(factory_name)

    
//     var user_name = localStorage.getItem('logged')
//     while (i < facto.length) {

//         if (user_name === facto[i]) {
//             reserved = true
//             break
//         }
//         else { i++ }
//     }
//     if (reserved === true) {

//         $('#reserv_err').append('<p>You have already reserved</p>')

//     }
//     else if (reserved === false && facto.length === 10) {
//         $('#reserv_err').append('<p>Sorry all booked for tonight</p>')


//     }
//     else {

//         facto.push(user_name)
//         localStorage.setItem(facto_name, JSON.stringify(facto))
//         $('#feed').append('<p>Your reservation has been confirmed, Have a great time</p>')
//     }

// }


//our web site has also a rating functionality, which allows each user to rate each establishment once.
//the overall rate will be calculated and displayed next to each establishment's <div> but we'll see that later. 
// function rating(value, login, factory) {
//     var i = 0
//     var rated = false
//     var facto = localStorage.getItem(factory_name)
//     var user = localStorage.getItem(login)
//     while (i < user.Rate.length) {
//         if (user.Rate[i] === facto.name) {
//             rated = true
//             break
//         }
//         else { i++ }
//     }
//     if (rated === true) {
//         $('#feed').append('<p>You have already rated</p>')
//     }
//     else {
//         user.Rate.push(facto.name)
//         localStorage.setItem(login, JSON.stringify(user.Rate))

//     }
// }

function filtering(filters, value) {
   
    

    search_array = filter(filters, function (element) {
        return (value === element.place || value === element.type || value === element.alcool || value === element.withwho)
    })
    $('#all_cards').empty()
    for (var i = 0; i < search_array.length; i++) {
        
        $('#all_cards').append($('<div id="card" value = ' + search_array[i].name +' ><p id="name">' + search_array[i].name + '</p><p id="place">' + search_array[i].place + '</p><p id="type">type:' + search_array[i].type + '</p><p id="price">price range:' + search_array[i].price + '</p><p id="partner">with who:' + search_array[i].withwho + '</p><p id="alcool">alcohol:' + search_array[i].alcool + '</p><p id="rate">rate:' + search_array[i].avg_rate + '</p><a class = "btn" href = "reserved.html"   >Reserve</a></div>'))
        // var button=document.getElementById("search_array["+i+"].name")
        // var user_name=localStorage.getItem('logged')
        // button.onclick=reservation(user_name,search_array[i].name)
        // $(".btn").on("click", reservation(search_array[i].name))
    }
    
}

function search(filters) {
    $('#all_cards').empty()
    var userData = document.getElementById('inputs').value
    search_array = filter(filters, function (element) {
        return (element.name.startsWith(userData) || element.place.startsWith(userData))
    })
    for (var i = 0; i < search_array.length; i++) {
        $('#all_cards').append($('<div id="card"><p id="name">' + search_array[i].name + '</p><p id="place">' + search_array[i].place + '</p><p id="type">type:' + search_array[i].type + '</p><p id="price">price range:' + search_array[i].price + '</p><p id="partner"> with who:' + search_array[i].withwho + '</p><p id="alcool">alcohol:' + search_array[i].alcool + '</p><p id="rate" >rate:' + search_array[i].avg_rate + '</p><a class = "btn" href = "reserved.html"   >Reserve</a></div> <img src="https://th.bing.com/th/id/R.aa69d0b967b7d7b5333a99a2e246fe46?rik=vAOMT9BHILHAkQ&riu=http%3a%2f%2fandyporterimages.com%2fwp-content%2fuploads%2f2015%2f01%2fVirgin_River_at_Night_Zion_NP1.jpg&ehk=Sjzc4UYvSFUU%2bYzpGbvJkgdyHU0Q4TSoKjaTs4GP4rA%3d&risl=&pid=ImgRaw&r=0" />'))
        // var button=document.getElementById("search_array["+i+"].name")
        // var user_name=localStorage.getItem('logged')
        // button.onclick=reservation(user_name,search_array[i].name)
    }

}

// $(".btn").on("click", reservation(search_array[i].name))

/*thats supposed to popup a succseful booked message*/
// var modal = document.getElementById("myModal");

// document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// document.getElementById("myBtn").onclick = function () {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// $(".mybtn").on('click',function(){
//     href="nighOut.html"
// })

 

