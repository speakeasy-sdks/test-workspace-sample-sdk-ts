/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class TopupInquiryRequestBodyAmount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}

export class TopupInquiryRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountToken" })
    accountToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => TopupInquiryRequestBodyAmount)
    amount?: TopupInquiryRequestBodyAmount;

    @SpeakeasyMetadata()
    @Expose({ name: "merchantId" })
    merchantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "partnerReferenceNo" })
    partnerReferenceNo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "publicUserId" })
    publicUserId?: string;
}

export class TopupInquiryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization-Customer" })
    authorizationCustomer?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Channel-ID" })
    channelID?: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: TopupInquiryRequestBody;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Client-Key" })
    xClientKey?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EXTERNAL-ID" })
    xExternalId?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Signature" })
    xSignature?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Timestamp" })
    xTimestamp?: string;
}

export class TopupInquiryResponse extends SpeakeasyBase {
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
