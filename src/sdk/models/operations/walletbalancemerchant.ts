/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class WalletbalanceMerchantRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "merchantId" })
    merchantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "partnerReferenceNo" })
    partnerReferenceNo?: string;
}

export class WalletbalanceMerchantRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=CHANNEL-ID" })
    channelId?: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: WalletbalanceMerchantRequestBody;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CLIENT-KEY" })
    xClientKey?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EXTERNAL-ID" })
    xExternalId?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-SIGNATURE" })
    xSignature?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-TIMESTAMP" })
    xTimestamp?: string;
}

export class WalletbalanceMerchantResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
