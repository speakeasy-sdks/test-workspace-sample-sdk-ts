# Whitelabel-E-wallet

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/test-workspace-sample-sdk-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/test-workspace-sample-sdk-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/test-workspace-sample-sdk-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/test-workspace-sample-sdk-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { WhitelabelEWallet } from "Whitelabel-E-wallet";

(async () => {
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
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [WhitelabelEWallet SDK](docs/sdks/whitelabelewallet/README.md)

* [accountBinding](docs/sdks/whitelabelewallet/README.md#accountbinding) - Account Binding
* [accountCreation](docs/sdks/whitelabelewallet/README.md#accountcreation) - Account Creation
* [authCaptureWithdraw](docs/sdks/whitelabelewallet/README.md#authcapturewithdraw) - Auth Capture - withdraw
* [authPaymentWithdraw](docs/sdks/whitelabelewallet/README.md#authpaymentwithdraw) - Auth Payment - withdraw
* [authQueryWithdraw](docs/sdks/whitelabelewallet/README.md#authquerywithdraw) - Auth Query - withdraw
* [authRefundWithdraw](docs/sdks/whitelabelewallet/README.md#authrefundwithdraw) - Auth Refund - withdraw
* [authVoidWithdraw](docs/sdks/whitelabelewallet/README.md#authvoidwithdraw) - Auth Void - withdraw
* [generateB2b2cToken](docs/sdks/whitelabelewallet/README.md#generateb2b2ctoken) - Generate B2B2C token
* [generateB2bToken](docs/sdks/whitelabelewallet/README.md#generateb2btoken) - Generate B2B Access token
* [generateWebview](docs/sdks/whitelabelewallet/README.md#generatewebview) - Generate WebView
* [otpVerification](docs/sdks/whitelabelewallet/README.md#otpverification) - OTP Verification
* [topup](docs/sdks/whitelabelewallet/README.md#topup) - TopUp
* [topupInquiry](docs/sdks/whitelabelewallet/README.md#topupinquiry) - TopUp- Inquiry
* [topupInquiryStatus](docs/sdks/whitelabelewallet/README.md#topupinquirystatus) - TopUp - Inquiry Status
* [walletbalanceCustomerMerchant](docs/sdks/whitelabelewallet/README.md#walletbalancecustomermerchant) - WalletBalance - Customer Merchant
* [walletbalanceMerchant](docs/sdks/whitelabelewallet/README.md#walletbalancemerchant) - WalletBalance - Merchant
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Start Error Handling -->
# Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |


## Example

```typescript
import { WhitelabelEWallet } from "Whitelabel-E-wallet";

(async () => {
    const sdk = new WhitelabelEWallet();

    let res;
    try {
        res = await sdk.accountBinding({
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
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->

<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from Whitelabel-E-wallet import WhitelabelEWallet;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new WhitelabelEWallet({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://sandbox.api.of.ayoconnect.id` | None |

For example:

```typescript
import { WhitelabelEWallet } from "Whitelabel-E-wallet";

(async () => {
    const sdk = new WhitelabelEWallet({
        serverIdx: 0,
    });

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
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { WhitelabelEWallet } from "Whitelabel-E-wallet";

(async () => {
    const sdk = new WhitelabelEWallet({
        serverURL: "https://sandbox.api.of.ayoconnect.id",
    });

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
})();

```
<!-- End Server Selection -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
