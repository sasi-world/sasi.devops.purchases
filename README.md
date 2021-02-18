```
mutation  createPurchase($purchaseInput:PurchaseInput!){
    createPurchase(purchase:$purchaseInput){

    photoID
    photo{
      name
      imageURL
    }
    dateCreated
    customerEmail
    contributorUsername
  }
}



```

```
{
  "purchaseInput": {

    "photoID": "8ca61a4f-f3a1-4da3-b8cf-99ea900b8709",
    "photo": {
      "name": "photo_1",
      "imageURL": "https://sasi-photos-dev.s3-eu-west-1.amazonaws.com/ab9354c2-5b15-4b03-a5fe-09e37a4aca27/pexels-aline-viana-prado-3491674.png"
    },
    "contributorUsername": "@toussaint_louverture",
    "contributorID": "ab9354c2-5b15-4b03-a5fe-09e37a4aca27",
    "customerEmail": "sasi_boss@gmail.com"

  }
}

```
