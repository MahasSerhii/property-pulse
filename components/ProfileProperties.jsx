"use client";
import deleteProperty from "@/app/actions/deleteProperty";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (!confirmed) {
      return;
    }
    await deleteProperty(propertyId);

    const updatedProperty = properties.filter(
      (property) => property._id === propertyId
    );
    setProperties(updatedProperty);
  };
  return properties.map((property, index) => {
    return (
      <div className="mb-10" key={index}>
        <Link href={`/properties/${property._id}`}>
          <Image
            className="h-32 w-full rounded-md object-cover"
            src={property.images[0]}
            width={1000}
            height={200}
            alt="Property 1"
          />
        </Link>
        <div className="mt-2">
          <p className="text-lg font-semibold">{property.name}</p>
          <p className="text-gray-600">{`Address: ${property.location.street}, ${property.location.city}, ${property.location.state}, ${property.location.zipcode}`}</p>
        </div>
        <div className="mt-2">
          <a
            href="/add-property.html"
            className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
          >
            Edit
          </a>
          <button
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
            type="button"
            onClick={() => {
              handleDeleteProperty(property._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
};

export default ProfileProperties;