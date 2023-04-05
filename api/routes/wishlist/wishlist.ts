const { Router } = require("express");
import db from "../../models";
const router = Router();

//WISHLIST

// MODIFY
router.put("/", async (req: any, res: any) => {
  let { userId, wishListId } = req.body;
  try {
    if (!userId || !wishListId) {
      return res.status(500).json({ message: "Incomplete information" });
    }

    let customer = await db.User.findByPk(userId, {});

    if (!customer) {
      return res.status(500).json({ message: "User not found" });
    }

    let newWishList = customer.wishList ? [...customer.wishList] : [];
    if (!newWishList.includes(wishListId)) {
      newWishList.push(wishListId);
      let result = await customer.update({ wishList: newWishList });
      return res.status(200).json(result);
    } else {
      return res
        .status(200)
        .json({ message: "Item already exists in the wishlist" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Could not modify the wishlist" });
  }
});

//DELETE
router.delete("/", async (req: any, res: any) => {
  let { userId, wishListId } = req.body;
  try {
    if (!userId || !wishListId) {
      return res.status(500).json({ message: "Incomplete information" });
    }

    let costumer = await db.User.findByPk(userId, {});

    if (!costumer) {
      return res.status(500).json({ message: "User not found" });
    }

    if (!costumer.wishList.includes(wishListId)) {
      return res.status(500).json({ message: "The item does not exist" });
    }

    let deleteWishList = [...costumer.wishList];
    let newWishList = deleteWishList.filter((w) => w !== wishListId);
    let result = await costumer.update({ wishList: newWishList });
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Could not delete the item of wishlist" });
  }
});

export default router;