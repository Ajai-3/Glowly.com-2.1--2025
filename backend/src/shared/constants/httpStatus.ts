enum HttpStatusCode {
    // 1xx Informational
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLY_HINTS = 103,

    // 2xx Success
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    IM_USED = 226,

    // 3xx Redirection
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,

    // 4xx Client Error
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    IM_A_TEAPOT = 418,
    MISDIRECTED_REQUEST = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    TOO_EARLY = 425,
    UPGRADE_REQUIRED = 426,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,

    // 5xx Server Error
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    VARIANT_ALSO_NEGOTIATES = 506,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508,
    NOT_EXTENDED = 510,
    NETWORK_AUTHENTICATION_REQUIRED = 511
}

// Optional: Helper functions to get status code information
namespace HttpStatusCode {
    export function getStatusText(code: HttpStatusCode): string {
        return HttpStatusText[code] || 'Unknown Status';
    }

    export function isInformational(code: HttpStatusCode): boolean {
        return code >= 100 && code < 200;
    }

    export function isSuccess(code: HttpStatusCode): boolean {
        return code >= 200 && code < 300;
    }

    export function isRedirect(code: HttpStatusCode): boolean {
        return code >= 300 && code < 400;
    }

    export function isClientError(code: HttpStatusCode): boolean {
        return code >= 400 && code < 500;
    }

    export function isServerError(code: HttpStatusCode): boolean {
        return code >= 500 && code < 600;
    }

    export function isError(code: HttpStatusCode): boolean {
        return isClientError(code) || isServerError(code);
    }
}

// Status text descriptions
const HttpStatusText: Record<HttpStatusCode, string> = {
    [HttpStatusCode.CONTINUE]: 'Continue',
    [HttpStatusCode.SWITCHING_PROTOCOLS]: 'Switching Protocols',
    [HttpStatusCode.PROCESSING]: 'Processing',
    [HttpStatusCode.EARLY_HINTS]: 'Early Hints',

    [HttpStatusCode.OK]: 'OK',
    [HttpStatusCode.CREATED]: 'Created',
    [HttpStatusCode.ACCEPTED]: 'Accepted',
    [HttpStatusCode.NON_AUTHORITATIVE_INFORMATION]: 'Non-Authoritative Information',
    [HttpStatusCode.NO_CONTENT]: 'No Content',
    [HttpStatusCode.RESET_CONTENT]: 'Reset Content',
    [HttpStatusCode.PARTIAL_CONTENT]: 'Partial Content',
    [HttpStatusCode.MULTI_STATUS]: 'Multi-Status',
    [HttpStatusCode.ALREADY_REPORTED]: 'Already Reported',
    [HttpStatusCode.IM_USED]: 'IM Used',

    [HttpStatusCode.MULTIPLE_CHOICES]: 'Multiple Choices',
    [HttpStatusCode.MOVED_PERMANENTLY]: 'Moved Permanently',
    [HttpStatusCode.FOUND]: 'Found',
    [HttpStatusCode.SEE_OTHER]: 'See Other',
    [HttpStatusCode.NOT_MODIFIED]: 'Not Modified',
    [HttpStatusCode.USE_PROXY]: 'Use Proxy',
    [HttpStatusCode.TEMPORARY_REDIRECT]: 'Temporary Redirect',
    [HttpStatusCode.PERMANENT_REDIRECT]: 'Permanent Redirect',

    [HttpStatusCode.BAD_REQUEST]: 'Bad Request',
    [HttpStatusCode.UNAUTHORIZED]: 'Unauthorized',
    [HttpStatusCode.PAYMENT_REQUIRED]: 'Payment Required',
    [HttpStatusCode.FORBIDDEN]: 'Forbidden',
    [HttpStatusCode.NOT_FOUND]: 'Not Found',
    [HttpStatusCode.METHOD_NOT_ALLOWED]: 'Method Not Allowed',
    [HttpStatusCode.NOT_ACCEPTABLE]: 'Not Acceptable',
    [HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED]: 'Proxy Authentication Required',
    [HttpStatusCode.REQUEST_TIMEOUT]: 'Request Timeout',
    [HttpStatusCode.CONFLICT]: 'Conflict',
    [HttpStatusCode.GONE]: 'Gone',
    [HttpStatusCode.LENGTH_REQUIRED]: 'Length Required',
    [HttpStatusCode.PRECONDITION_FAILED]: 'Precondition Failed',
    [HttpStatusCode.PAYLOAD_TOO_LARGE]: 'Payload Too Large',
    [HttpStatusCode.URI_TOO_LONG]: 'URI Too Long',
    [HttpStatusCode.UNSUPPORTED_MEDIA_TYPE]: 'Unsupported Media Type',
    [HttpStatusCode.RANGE_NOT_SATISFIABLE]: 'Range Not Satisfiable',
    [HttpStatusCode.EXPECTATION_FAILED]: 'Expectation Failed',
    [HttpStatusCode.IM_A_TEAPOT]: 'I\'m a teapot',
    [HttpStatusCode.MISDIRECTED_REQUEST]: 'Misdirected Request',
    [HttpStatusCode.UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
    [HttpStatusCode.LOCKED]: 'Locked',
    [HttpStatusCode.FAILED_DEPENDENCY]: 'Failed Dependency',
    [HttpStatusCode.TOO_EARLY]: 'Too Early',
    [HttpStatusCode.UPGRADE_REQUIRED]: 'Upgrade Required',
    [HttpStatusCode.PRECONDITION_REQUIRED]: 'Precondition Required',
    [HttpStatusCode.TOO_MANY_REQUESTS]: 'Too Many Requests',
    [HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE]: 'Request Header Fields Too Large',
    [HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS]: 'Unavailable For Legal Reasons',

    [HttpStatusCode.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
    [HttpStatusCode.NOT_IMPLEMENTED]: 'Not Implemented',
    [HttpStatusCode.BAD_GATEWAY]: 'Bad Gateway',
    [HttpStatusCode.SERVICE_UNAVAILABLE]: 'Service Unavailable',
    [HttpStatusCode.GATEWAY_TIMEOUT]: 'Gateway Timeout',
    [HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED]: 'HTTP Version Not Supported',
    [HttpStatusCode.VARIANT_ALSO_NEGOTIATES]: 'Variant Also Negotiates',
    [HttpStatusCode.INSUFFICIENT_STORAGE]: 'Insufficient Storage',
    [HttpStatusCode.LOOP_DETECTED]: 'Loop Detected',
    [HttpStatusCode.NOT_EXTENDED]: 'Not Extended',
    [HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED]: 'Network Authentication Required'
};

export default HttpStatusCode;