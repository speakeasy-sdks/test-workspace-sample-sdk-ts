/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GenerateB2bTokenAdditionalInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "merchantId" })
    merchantId?: string;
}

export class GenerateB2bTokenRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "additionalInfo" })
    @Type(() => GenerateB2bTokenAdditionalInfo)
    additionalInfo?: GenerateB2bTokenAdditionalInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "grantType" })
    grantType?: string;
}

export class GenerateB2bTokenRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: GenerateB2bTokenRequestBody;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Client-Key" })
    xClientKey?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Signature" })
    xSignature?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Timestamp" })
    xTimestamp?: string;
}

/**
 * Generate B2B token response
 */
export class GenerateB2bTokenResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accessToken" })
    accessToken?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expiresIn" })
    expiresIn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "responseCode" })
    responseCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "responseMessage" })
    responseMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "responseTime" })
    responseTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tokenType" })
    tokenType?: string;
}

export class GenerateB2bTokenResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

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

    /**
     * Generate B2B token response
     */
    @SpeakeasyMetadata()
    object?: GenerateB2bTokenResponseBody;
}
