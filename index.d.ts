// Type definitions for meteor-mailgun-api
// Project: https://github.com/gfk-ba/meteor-mailgun-api
// Definitions by: Finchalyzer <https://github.com/finchalyzer/>

interface Mailgun {
    send(emailObject:{
      to:string,
      cc?: string,
      bcc?: string
      from?: string,
      html?: string,
      text?: string,
      subject: string,
      tags?:string[],
      options?:{},
      testmode?:string,
      saveEmailTo?: string
   }): void;

   getEvents(filter:{
      filter:{},
      beginDate: Date,
      endDate: Date,
      ascending: boolean,
      pretty: boolean
   })

   handleEvents(filter:{
      eventHandlers:{}
   })
}

interface MailgunApi {
    new(name: {apiKey: string, domain: string}): Mailgun;
}

declare var Mailgun: MailgunApi;
