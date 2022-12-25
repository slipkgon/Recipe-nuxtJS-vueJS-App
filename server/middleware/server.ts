import { initializeApp, getApps, cert } from "firebase-admin/app";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apps = getApps();
  if (!apps.length) {
    initializeApp({
      credential: cert({
        type: "service_account",
        project_id: "recipe-42051",
        private_key_id: "414ae1a5a868a99734d3962bf6b791ec2525c911",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDOZME7ecxAM7wt\ns0PJ12QHo9X13awp2dM/b0dt1TPGzBwENlNHwn2BEKp1qj0y6ZgJ989+iNtgtfN+\nvnSA4uz6/yi/+Y4L5FGyAWrbhPGGKRqTYPOIeBwd7lJSsMQPL4N0A0TimRJB/OcA\noNNmjtxaeoY+FgAQCeYiFcagR6mesgWAGPwzSqC2Ac8Sw1Ox2sqfh170gtSN06ju\nCGkFWOJ/58EputdyYsLrQ9vDJpaldIwvZtGFmPZIHWa3jl/4ywlPbQ4gQ639Ijco\ns7NY482VNG7gJlgOjdF1SYManSKILQvB6QygQu9vXmHoQ+O4T5qeiGaV5LJXXO96\nr/SJO3v/AgMBAAECggEAPMV8BCgz1P+mvAoZvrfWM02xdWilBdmmkvoQHS32xeVZ\npn/ce7evvq4KkwTiajhP1TeLeCWR+uL4ZGxt33lx7+HrvMMdaTD8QR6buTFm8Grv\n8U9NxfQfy0xeHwz/Xb1Oxn0j7ljGAHoYBp5UQNF13opPNr7Bm/deNNEWoCEZt6kJ\ncf1AuEXJw+w/0bS7P0AvrpSMcrH4QrOMAolsK1FMmqHC7ijvGlVq/HVlLJgU9Wtd\nDN0gO1XDslEnMIL/B51MB3B3hsO7XyIU/nO3y/ih8qhcFgYNmRXIl88J0UzWAoJf\nlkqz+yi0eZloEtgG5UwbWnwkGvFeuwwKebswCsm0+QKBgQD8bOxBNkGaDSeohC4X\nnfW6BgyMa/CCOf2CIKjNAw7gk25xL9xB/GjUNDygDw5elbez40iWQ3FHRGV1uUI9\nHdI4OMXxovfBCJQ+mNDojg70gS+q9dxGyKna76gPJ2aEoEyT3DHvGVnfJqSBCsM6\ntdWEcjNZlvfcn7hboa1gT79m7QKBgQDRUPW+1CRJq+qeFkbYPFaIUVxtzJUYR0oF\n+vNmZznqoQYFTRB2MEgNtOnyMewTG6+0fRGFZdCdzpoqQVRhcA3tnVNmvOe1yFGU\nvT9LespDNG/5R808i77tfjg+JpJjmIM+pPVlpP1CgZ0U4Q5+aEGJdnv+KbdIdyUl\nzoHzrQ0FGwKBgGWjJe2L/xYcPd+oeTahL5PbY6oWvBxzZRPEOrNxi8f5FPsWHkWj\ncEIhVlfMOCj1d6ZC2bNHLJFZhNDF61nYbBCfK3SD/eYHokkiFtvMd1ETwzG/FRab\nLWkuHikb4Dd+o9bVTnXLa1hiotIil0FIfdR6dxqXou1+kiizDLA+6/5xAoGAD9af\ncbwdrtFqZGHtJGmUZqY5ZzmGwpqKWF9/0WzYLg/XI8mMCFVo7liVJzVt1phOuEqK\na9yjZ319ntropqLS+vrfl7ONmOy6d5XGV1DIQ0ORgXxUZFNytAfL+6/xfcXJkJDs\n3K8aVtD18OGCtj/vTZaAlV/UtZAGaJDytlyO0qcCgYASaipkT11LzF7/1rx8RI4P\nAqDuQJ0FlVNPFs6f084YQEFWJC2kStUoONYiyXSIvPcVfeV51ZsQT5N5EWao99a2\nyAuUbQAkJEJ5XrHIAOY33HyfGe1prbc1YtvYIhuxxoeDsV17v6E62DNZBlWFFeVR\n41XXYRCC/sc63IyQ/HJjgg==\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-gi2h8@recipe-42051.iam.gserviceaccount.com",
        client_id: "100618682264901312663",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gi2h8%40recipe-42051.iam.gserviceaccount.com",
      }),
    });
  }
});
