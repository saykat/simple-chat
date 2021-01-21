import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class MessageService {
    readonly BaseURI = environment.apiBaseUrl;
    constructor(private http: HttpClient){

    }
    getUserReceivedMessages(userId:string) {
        return this.http.get(this.BaseURI + '/message');
      }

      getTempData(){
        var items=[
          {"firstName":"Ashequr ","lastName":"Rahman","isOnline":false,"id":"12a59f3a-66f8-4963-865a-9720159001dd","userName":"asheq@gmail.com","normalizedUserName":"ASHEQ@GMAIL.COM","email":"asheq@gmail.com","normalizedEmail":"ASHEQ@GMAIL.COM","emailConfirmed":false,"passwordHash":"AQAAAAEAACcQAAAAEHjcKgWiW6V1KvP6JLIjDVfbIDevxG9EjGOMeIWCoJzohfnb4b5TT+2TGMH9kEqC7g==","securityStamp":"N6XTCOSTNCT4Q4KK5IK5QVJ4LBWRCM73","concurrencyStamp":"ccedaed9-3ee8-4761-ba7e-74eaede0ad92","phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"lockoutEnd":null,"lockoutEnabled":true,"accessFailedCount":0},{"firstName":"Ehasanul ","lastName":"Hoque","isOnline":false,"id":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","userName":"ehasan@outlook.com","normalizedUserName":"EHASAN@OUTLOOK.COM","email":"ehasan@outlook.com","normalizedEmail":"EHASAN@OUTLOOK.COM","emailConfirmed":false,"passwordHash":"AQAAAAEAACcQAAAAEK9+jOlmYETk6Xc1dPovNI6iw43IAkqSR76IoJ1xHMWMfTynrOi99e0HDxk+syGsPw==","securityStamp":"KZKMM465CN4QOOYSIXN5QDJ437EGDNCH","concurrencyStamp":"11f46505-4a2f-4332-af5b-f65658874239","phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"lockoutEnd":null,"lockoutEnabled":true,"accessFailedCount":0},{"firstName":"Mehrima","lastName":"Hoque","isOnline":false,"id":"9caa3089-f179-42b4-9003-37c0fd20ddf3","userName":"mehrima@outlook.com","normalizedUserName":"MEHRIMA@OUTLOOK.COM","email":"mehrima@outlook.com","normalizedEmail":"MEHRIMA@OUTLOOK.COM","emailConfirmed":false,"passwordHash":"AQAAAAEAACcQAAAAEBjB8Ov2BIsaKIv2Tsi0aveJ7Bz5Gq9HCzCfp47SSlQlrG47YH9ckILH0zjKsXiHFQ==","securityStamp":"Y2JQ3PRTXW2P5HHVN7BS4R4OAHSZUNMN","concurrencyStamp":"6ccc5d8c-ad07-406d-86b2-e7abc3167894","phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"lockoutEnd":null,"lockoutEnabled":true,"accessFailedCount":0},{"firstName":"Morzina","lastName":"Hoque","isOnline":false,"id":"cbfed7ab-aeab-4d5d-b8ef-ffb49b0f5cd4","userName":"morzina@outlook.com","normalizedUserName":"MORZINA@OUTLOOK.COM","email":"morzina@outlook.com","normalizedEmail":"MORZINA@OUTLOOK.COM","emailConfirmed":false,"passwordHash":"AQAAAAEAACcQAAAAEBuF2pTt+bD6BtSmwNeKVTMCIF/qKBTUNzlxKE2a5tqAQzwRNtMHF6NdkqRGR8toZg==","securityStamp":"BIYHSMZBNVOZY6JJSY5R3N3SGU5JFKWL","concurrencyStamp":"c8226f56-e8fb-4795-a754-9403567559f0","phoneNumber":null,"phoneNumberConfirmed":false,"twoFactorEnabled":false,"lockoutEnd":null,"lockoutEnabled":true,"accessFailedCount":0}];
      return items;
        }
      getTempMessageData(){
        var items=
          [{"id":1,"sender":"ehasan","receiver":"bulbul","messageDate":"2021-03-12T00:00:00","content":"ehasan is a good man","isNew":true},{"id":2,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"9caa3089-f179-42b4-9003-37c0fd20ddf3","messageDate":"2021-01-17T17:39:57.063","content":"how are you","isNew":false},{"id":3,"sender":"9caa3089-f179-42b4-9003-37c0fd20ddf3","receiver":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","messageDate":"2021-01-17T18:23:45.796","content":"I ma doing fine","isNew":false},{"id":4,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"cbfed7ab-aeab-4d5d-b8ef-ffb49b0f5cd4","messageDate":"2021-01-17T18:28:08.555","content":"No way","isNew":false},{"id":5,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"9caa3089-f179-42b4-9003-37c0fd20ddf3","messageDate":"2021-01-17T19:10:48.241","content":"gdfgfdhgfdjhgfjfghkjhljkhrejtretkyjreykjrtekyrtekylrteklyrteklyrkltyrtlylrtretreyrtyrtyt","isNew":false},{"id":6,"sender":"9caa3089-f179-42b4-9003-37c0fd20ddf3","receiver":"12a59f3a-66f8-4963-865a-9720159001dd","messageDate":"2021-01-19T18:04:13.489","content":"Hi asheq uncle","isNew":false},{"id":7,"sender":"12a59f3a-66f8-4963-865a-9720159001dd","receiver":"9caa3089-f179-42b4-9003-37c0fd20ddf3","messageDate":"2021-01-19T18:04:52.521","content":"Hi","isNew":false},{"id":8,"sender":"12a59f3a-66f8-4963-865a-9720159001dd","receiver":"9caa3089-f179-42b4-9003-37c0fd20ddf3","messageDate":"2021-01-19T18:05:29.496","content":"how are you","isNew":false},{"id":9,"sender":"12a59f3a-66f8-4963-865a-9720159001dd","receiver":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","messageDate":"2021-01-19T18:06:56.817","content":"Hi ehasan bhai","isNew":false},{"id":10,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"12a59f3a-66f8-4963-865a-9720159001dd","messageDate":"2021-01-19T18:07:50.497","content":"how are you\n","isNew":false},{"id":11,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"12a59f3a-66f8-4963-865a-9720159001dd","messageDate":"2021-01-19T19:02:22.149","content":"HI ehasan bhai","isNew":false},{"id":12,"sender":"12a59f3a-66f8-4963-865a-9720159001dd","receiver":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","messageDate":"2021-01-19T19:02:44.109","content":"who are you?","isNew":false},{"id":13,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"12a59f3a-66f8-4963-865a-9720159001dd","messageDate":"2021-01-19T19:03:37.612","content":"Hi","isNew":false},{"id":14,"sender":"12a59f3a-66f8-4963-865a-9720159001dd","receiver":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","messageDate":"2021-01-19T19:03:45.349","content":"what","isNew":false},{"id":15,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"12a59f3a-66f8-4963-865a-9720159001dd","messageDate":"2021-01-19T19:04:21.029","content":"this is I am","isNew":false},{"id":16,"sender":"12a59f3a-66f8-4963-865a-9720159001dd","receiver":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","messageDate":"2021-01-19T19:04:34.069","content":"you are not","isNew":false},{"id":17,"sender":"56ef2e61-4724-4eae-8935-5b0d3f18ba83","receiver":"cbfed7ab-aeab-4d5d-b8ef-ffb49b0f5cd4","messageDate":"2021-01-21T05:54:06.97","content":"sdagfdg","isNew":false}]
          return items;
      }
  }