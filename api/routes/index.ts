import userRouter from "./user/users";
import userTypesRouter from "./userTypes/userTypes";
import propertiesRouter from "./properties/properties";
import conditionRouter from "./condition/condition";
import countryRouter from "./country/country";
import priceRouter from "./price/price";
import stateRouter from "./state/state";
import servicesRouter from "./services/services";

import zoneRouter from "./zone/zone";

import categoryRouter from "./category/category";


import gardenRouter from "./garden/garden";
import propertyConditionRouter from "./propertyCondition/propertyCondition";
import propertyCountryRouter from "./propertyCountry/propertyCountry";
import propertyPriceRouter from "./propertyPrice/propertyPrice";
import propertyStateRouter from "./propertyState/propertyState";
import propertyCategoryRouter from "./propertyCategory/propertyCategory";
import propertyGardenRouter from "./propertyGarden/propertyGarden";
import propertyServicesRouter from "./propertyServices/propertyServices";
import propertyZoneRouter from "./propertyZone/propertyZone";

const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/garden", gardenRouter);
router.use("/services", servicesRouter);
router.use("/usertype", userTypesRouter);
router.use("/properties", propertiesRouter);
router.use("/condition", conditionRouter);
router.use("/country", countryRouter);
router.use("/price", priceRouter);
router.use("/state", stateRouter);

router.use("/zone", zoneRouter);

router.use("/category", categoryRouter);

router.use("/propertycondition", propertyConditionRouter);
router.use("/propertycountry", propertyCountryRouter);
router.use("/propertyprice", propertyPriceRouter);
router.use("/propertystate", propertyStateRouter);
router.use("/propertyCategory", propertyCategoryRouter);
router.use("/propertygarden", propertyGardenRouter);
router.use("/propertyservices", propertyServicesRouter);
router.use("/propertyzone", propertyZoneRouter);

export default router;
