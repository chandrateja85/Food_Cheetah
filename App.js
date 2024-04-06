import React from "react";
import ReactDOM from "react-dom";
import logoimg from './images/logo.png' 
import Chapathi from './images/Chapathi.jpeg'


const Header = ()=>(
    <div className="Header">
        <div className="LogoPart">
            <img className="logo" src={logoimg}></img>
        </div>
        <div className="NavList">
            <ul>
                
                <li>Home</li>
                <li>Cart</li>
                <li>About us</li>
                <li>Restaurant</li>
                <li>Login</li>
            </ul>
        </div>
    </div>

);

const urlid="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Card = (props) => {
    const { info } = props; // Destructuring info from props
    return (
        <div className="Card">
            {console.log(info)}
            <div className="FoodImg">
                <img className="cardimg" src={urlid+info.cloudinaryImageId}></img>
            </div>
            <div className="Description">
                <h3>{info.name}</h3>
                <p>{info.cuisines.join(",")}</p>
                <p>Rating:{info.avgRating}  | | Delivery Time:{info.sla.deliveryTime} Minutes</p>
                <p>{info.locality}</p>
                <span className="Button">
                    Order Now
                </span>
            </div>
            
        </div>
    );
};

const restalist=[
    {
        "info": {
            "id": "745751",
            "name": "Arena Restaurant and Bar",
            "cloudinaryImageId": "dc5264445465769eac73535cb6006a1a",
            "locality": "Royal Classic Apartment Road",
            "areaName": "Governorpet",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "442242",
            "avgRatingString": "4.1",
            "totalRatingsString": "50+",
            "promoted": true,
            "adTrackingId": "cid=12482055~p=1~eid=0000018e-b2ea-12b0-24ef-40a400f9011c~srvts=1712398668464~69584~collid=69584",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 20:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/arena-restaurant-and-bar-royal-classic-apartment-road-governorpet-vijayawada-745751",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "828405",
            "name": "Zero Miles",
            "cloudinaryImageId": "0aedf6b5cc53a991c21b6d6b2051034c",
            "locality": "Gundimeda Road",
            "areaName": "Governorpet",
            "costForTwo": "₹460 for two",
            "cuisines": [
                "Continental",
                "Telangana",
                "Home Food"
            ],
            "parentId": "7725",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/zero-miles-gundimeda-road-governorpet-vijayawada-828405",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "723361",
            "name": "Cake Studio",
            "cloudinaryImageId": "be899eedad310453aa1bd5af5b662ade",
            "locality": "Tadepalle",
            "areaName": "Tadepalli",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "55122",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=12329762~p=2~eid=0000018e-b2ea-12b0-24ef-40a500f90207~srvts=1712398668464~69584~collid=69584",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "8.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cake-studio-tadepalle-tadepalli-vijayawada-723361",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "755805",
            "name": "Rohini Food Corner",
            "cloudinaryImageId": "9e83421e7d5adf947193f152283913d0",
            "locality": "Tadepalle",
            "areaName": "Governorpet",
            "costForTwo": "₹299 for two",
            "cuisines": [
                "Biryani",
                "Chinese"
            ],
            "avgRating": 3.8,
            "parentId": "447106",
            "avgRatingString": "3.8",
            "totalRatingsString": "9",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 21:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rohini-food-corner-tadepalle-governorpet-vijayawada-755805",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "77506",
            "name": "Geethakrishna Family Restaurant",
            "cloudinaryImageId": "jdoei89srlai2q9w3kiu",
            "locality": "Congress office Road",
            "areaName": "Governorpet",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Tandoor",
                "South Indian",
                "Andhra",
                "Seafood",
                "North Indian"
            ],
            "avgRating": 3.9,
            "parentId": "445873",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=12458714~p=3~eid=0000018e-b2ea-12b0-24ef-40a600f90375~srvts=1712398668464~69584~collid=69584",
            "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 11.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/geethakrishna-family-restaurant-congress-office-road-governorpet-vijayawada-77506",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "833076",
            "name": "Susmita Bakery Cakes And Sweets",
            "cloudinaryImageId": "222d7adeede9d84eeeb5bcb830560bb7",
            "locality": "Governorpet",
            "areaName": "Governorpet",
            "costForTwo": "₹299 for two",
            "cuisines": [
                "Cafe",
                "Fast Food",
                "Pizzas"
            ],
            "avgRating": 4,
            "parentId": "495437",
            "avgRatingString": "4.0",
            "totalRatingsString": "3",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 7.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/susmita-bakery-cakes-and-sweets-governorpet-vijayawada-833076",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "193808",
            "name": "Prasad Chicken Pakodi",
            "cloudinaryImageId": "ti8quipbliiflpir7o3x",
            "locality": "M G Road",
            "areaName": "Labbipet",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Snacks",
                "Biryani"
            ],
            "avgRating": 4.2,
            "parentId": "13585",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=12531156~p=4~eid=0000018e-b2ea-12b0-24ef-40a700f9043b~srvts=1712398668464~69584~collid=69584",
            "sla": {
                "deliveryTime": 69,
                "lastMileTravel": 12,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "12.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/prasad-chicken-pakodi-m-g-road-labbipet-vijayawada-193808",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "136233",
            "name": "Our Place",
            "cloudinaryImageId": "thfrrcrtijcfppugbis4",
            "locality": " Ashram Road, Tadepalli",
            "areaName": " Ashram Road, Tadepalli",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian",
                "North Indian",
                "Tandoor",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "153006",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 7.5,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "7.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/our-place-ashram-road-tadepalli-vijayawada-136233",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    },
    {
        "info": {
            "id": "71351",
            "name": "Sweet Magic",
            "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
            "locality": "Rama Rao Street",
            "areaName": "Labbipet",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Indian",
                "Tandoor",
                "Desserts",
                "Bakery",
                "Chinese",
                "Thalis",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "3142",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "promoted": true,
            "adTrackingId": "cid=12458669~p=5~eid=0000018e-b2ea-12b0-24ef-40a800f90574~srvts=1712398668464~69584~collid=69584",
            "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 12.3,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "12.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-4bc1c063-faaf-48b0-8778-95aab79336c9"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-magic-rama-rao-street-labbipet-vijayawada-71351",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_byName"
    }
]




const BodyPart = () => {
    { console.log(restalist) }
    return (
        <div className="MainBody">
            <center><h1> Top Restaurant's at Vaddeswaram 📌 </h1></center>
            <div className="CardContainer">
                {/* Iterate over the restalist array using map */}
                {restalist.map((restaurant, index) => (
                    // Render a Card component for each restaurant
                    <Card key={index} info={restaurant.info} />
                ))}
            </div>
        </div>
    );
};

const Page =()=>(
    <div>
        <Header/>
        <BodyPart/>
    </div>

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);

