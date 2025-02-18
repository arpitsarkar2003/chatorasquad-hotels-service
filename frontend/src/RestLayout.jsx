import React from "react";
// import RestaurantCard from "./components/RestaurantCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";


const RestLayout = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const verifyToken = searchParams.get("verify"); // Get token from URL
    const { hotelName, roomNumber } = useParams();

    const AdminResturantData = [
        {
            id: 1,
            name: "Chatora Squad",
            description: "Description 1",
            location: "Location 1",
            contact: "Contact 1",
        },
    ];

    const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

    // const handleClick = () => {
    //     navigate(`/${hotelName}/${roomNumber}/${toSlug(restaurant?.name)}/menu?restaurantid=${restaurant?._id}&verify=${verifyToken}`)
    // };

    return (
        <div className="p-6 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {AdminResturantData.map((restaurant) => (
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <img
                                src={restaurant?.image || "/no-image-food-placeholder.webp"}
                                alt={restaurant?.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <CardTitle className="mt-4">{restaurant.name}</CardTitle>
                            {restaurant.description && <CardDescription>{restaurant.description}</CardDescription>}
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{restaurant.location || "Address not available"}</span>
                                </div>
                                {restaurant.email && (
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <span>{restaurant.email}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{restaurant.contact || "Not available"}</span>
                                </div>
                                {restaurant.openingHours && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{restaurant.openingHours.monday || "Opening hours not available"}</span>
                                    </div>
                                )}
                            </div>
                        </CardContent>

                        <CardFooter>

                            <Button
                                onClick={() => navigate(`/${hotelName}/${roomNumber}/chatora-squad/menu?restaurantid=${restaurant?.id}&verify=${verifyToken}`)}
                            // onClick={handleClick}
                            >
                                View Menu
                            </Button>

                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RestLayout;
