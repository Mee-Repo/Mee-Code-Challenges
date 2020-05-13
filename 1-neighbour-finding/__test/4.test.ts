import { findNeighbors } from '../index';

const input: any = {
    "trails": {
        "e9812d64-407e-4f93-8c9e-46660554f850": {
            "order": 0,
            "cardIdActive": "7e2ddb03-0567-4c23-b190-cfe81473c4ed"
        },
        "b10caa44-fb9d-4e38-903b-1c82b1c5afba": {
            "order": 1,
            "cardIdActive": "21a26b81-1369-48ea-bdbe-4073e0193d52"
        },
        "7e1f69a8-42f6-42ca-bade-1cd1fd1864cb": {
            "order": 2,
            "cardIdActive": "1f004e1e-1a07-4441-87f5-35bd09085461"
        },
        "37d78867-0881-449b-a50a-758e23ea2f89": {
            "order": 3,
            "cardIdActive": null
        },
        "962245ef-5cc7-464f-8616-f33ff71febc1": {
            "order": 4,
            "cardIdActive": null
        }
    },
    "cards": {
        "7e2ddb03-0567-4c23-b190-cfe81473c4ed": {
            "order": 0,
            "trailId": "e9812d64-407e-4f93-8c9e-46660554f850"
        },
        "4f8ea0f3-b714-45a7-ba6e-bd6cbc7f10ad": {
            "order": 0,
            "trailId": "b10caa44-fb9d-4e38-903b-1c82b1c5afba"
        },
        "f1b26307-7290-446d-b640-8710eb3b364a": {
            "order": 1,
            "traildId": "b10caa44-fb9d-4e38-903b-1c82b1c5afba"
        },
        "21a26b81-1369-48ea-bdbe-4073e0193d52": {
            "order": 2,
            "traildId": "b10caa44-fb9d-4e38-903b-1c82b1c5afba"
        },
        "391448e5-5849-420b-83f0-7070abb7cc23": {
            "order": 3,
            "traildId": "b10caa44-fb9d-4e38-903b-1c82b1c5afba"
        },
        "1f004e1e-1a07-4441-87f5-35bd09085461": {
            "order": 0,
            "traildId": "7e1f69a8-42f6-42ca-bade-1cd1fd1864cb"
        },
        "4480a423-fff1-4195-958e-6a26ce213544": {
            "order": 1,
            "traildId": "7e1f69a8-42f6-42ca-bade-1cd1fd1864cb"
        },
        "022c122a-f59b-4c90-a090-546232e8f0bc": {
            "order": 2,
            "traildId": "7e1f69a8-42f6-42ca-bade-1cd1fd1864cb"
        },
        "54c44c8e-2ca8-4f38-b6f3-37d204d46883": {
            "order": 0,
            "traildId": "37d78867-0881-449b-a50a-758e23ea2f89"
        },
        "fb71d5bc-ed77-46c4-9528-b83507697a4d": {
            "order": 1,
            "traildId": "37d78867-0881-449b-a50a-758e23ea2f89"
        },
        "907e3322-dc2d-472e-bd5c-494e296ebd5f": {
            "order": 0,
            "traildId": "962245ef-5cc7-464f-8616-f33ff71febc1"
        },
        "9b0694a8-db2b-4b52-af03-9a2a085da15c": {
            "order": 1,
            "traildId": "962245ef-5cc7-464f-8616-f33ff71febc1"
        },
        "64d49d26-c0c4-49b6-b516-ea7f2d6adfa2": {
            "order": 2,
            "traildId": "962245ef-5cc7-464f-8616-f33ff71febc1"
        },
        "f966f7f0-1abc-40bc-b35c-b1879db844b2": {
            "order": 3,
            "traildId": "962245ef-5cc7-464f-8616-f33ff71febc1"
        }
    }
};

const output: any = [
    "f1b26307-7290-446d-b640-8710eb3b364a",
    "21a26b81-1369-48ea-bdbe-4073e0193d52",
    "391448e5-5849-420b-83f0-7070abb7cc23",
    "1f004e1e-1a07-4441-87f5-35bd09085461",
    "4480a423-fff1-4195-958e-6a26ce213544",
    "54c44c8e-2ca8-4f38-b6f3-37d204d46883",
    "fb71d5bc-ed77-46c4-9528-b83507697a4d",
];

it('Case 4', () => {
   expect(
       findNeighbors(
           input,
           "1f004e1e-1a07-4441-87f5-35bd09085461"
        )
    ).toEqual(output); 
});