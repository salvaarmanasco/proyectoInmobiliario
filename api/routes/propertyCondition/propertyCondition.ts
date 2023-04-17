const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyCondition.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-Condition relationship not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, ConditionId } = req.body;
  try {
    let result = await db.PropertyCondition.create({
      PropertyId,
      ConditionId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-Condition relationship");
  }
});

router.put("/", async (req: any, res: any) => {
  const { PropertyId, ConditionId } = req.body;
  try {
    await db.PropertyCondition.update(
      { ConditionId },
      { where: { PropertyId } }
    );
    return res
      .status(200)
      .send("the property condition has been successfully modified");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not modify the Property-Condition relationship");
  }
});

export default router;
