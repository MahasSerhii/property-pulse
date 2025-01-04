import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializedObject } from "@/utils/convertToObject";
import React from "react";

const SearchResultsPage = async ({
  searchParams: { location, propertyType },
}) => {
  await connectDB();

  const locationRegexPattern = new RegExp(location, "i");

  const query = {
    $or: [
      { name: locationRegexPattern },
      { description: locationRegexPattern },
      { "location.street": locationRegexPattern },
      { "location.city": locationRegexPattern },
      { "location.state": locationRegexPattern },
      { "location.zipcode": locationRegexPattern },
    ],
  };

  if (propertyType && propertyType !== "All") {
    const typeRegexPattern = new RegExp(propertyType, "i");
    query.type = typeRegexPattern;
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializedObject(propertiesQueryResults);
  console.log(properties);

  return <div>search results</div>;
};

export default SearchResultsPage;
