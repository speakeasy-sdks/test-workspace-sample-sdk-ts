/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class AdditionalInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "merchantId" })
    merchantId?: string;
}

export class GenerateB2b2cTokenRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "additionalInfo" })
    @Type(() => AdditionalInfo)
    additionalInfo?: AdditionalInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "authCode" })
    authCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "grantType" })
    grantType?: string;
}

export class GenerateB2b2cTokenRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: GenerateB2b2cTokenRequestBody;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Client-Key" })
    xClientKey?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Signature" })
    xSignature?: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Timestamp" })
    xTimestamp?: string;
}

/**
 * Generate B2B2C token response
 */
export class GenerateB2b2cTokenResponseBody extends SpeakeasyBase {
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

export class GenerateB2b2cTokenResponse extends SpeakeasyBase {
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
     * Generate B2B2C token response
     */
    @SpeakeasyMetadata()
    object?: GenerateB2b2cTokenResponseBody;
}
