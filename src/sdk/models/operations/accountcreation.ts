/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AccountCreationRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "merchantId" })
    merchantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "partnerReferenceNo" })
    partnerReferenceNo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phoneNo" })
    phoneNo?: string;
}

export class AccountCreationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Channel-ID" })
    channelID?: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: AccountCreationRequestBody;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Client-Key" })
    xClientKey?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EXTERNAL-ID" })
    xExternalId?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Signature" })
    xSignature?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Timestamp" })
    xTimestamp?: string;
}

/**
 * Account Creation response
 */
export class AccountCreationResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "partnerReferenceNo" })
    partnerReferenceNo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "referenceNo" })
    referenceNo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "registrationToken" })
    registrationToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "responseCode" })
    responseCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "responseMessage" })
    responseMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "responseTime" })
    responseTime?: string;
}

export class AccountCreationResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers: Record<string, string[]>;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Account Creation response
     */
    @SpeakeasyMetadata()
    object?: AccountCreationResponseBody;
}
