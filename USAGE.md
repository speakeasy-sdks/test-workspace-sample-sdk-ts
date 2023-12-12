<!-- Start SDK Example Usage [usage] -->
```typescript
import { WhitelabelEWallet } from "Whitelabel-E-wallet";

async function run() {
    const sdk = new WhitelabelEWallet();

    const res = await sdk.accountBinding({
        channelID: "95221",
        requestBody: {
            authCode: "76a345deaccf47d2ac786c1a3184f987",
            merchantId: "AYOPOP",
            partnerReferenceNo: "20230630A00000000000010000000203",
        },
        xClientKey: "h8XiZaCHAaNIvUh60AQqwYO0hJssGfNt80Gq0LaMriOTUAH",
        xExternalId: "41017551351950293184162180797889",
        xSignature:
            "57e850c5daaa6c8afb60801f9f47245b9ceef63cf76a46c1eb717e5e9174e260ce8dff1fde0a9870139840d081b4ff2c3a6a38bb2ce9df7e4115d2d61071b690957b328fa6dfb29b3305c7e596c96accc4f2515e7a5bae720062606c29b6500979bca96220e838da85c2312647ce837df49f6fa1ccf89c33aa9c46287074f1e70fc20dbada8ebee81177b18b001dabfd4464487c41d3f124178583d152339547e25b5bbbc6dfd4ec3d498e07f70dd1f91e4968c1798578c3a967be7ac0b43fb988c9a36598cba9344a9cbb4f8b0b55d533f73c6966f96f6f29945e28fbdf8a180cf51451a28ac588ba4a94f53c1c6e64977c641daac8fd195157e3fb589be45c",
        xTimestamp: "2023-06-05T09:55:32+07:00",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->