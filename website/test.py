from intasend import APIService

API_PUBLISHABLE_KEY = 'ISPubKey_test_8658611f-da4a-4be3-8c1a-365db089637b'
API_TOKEN = 'ISSecretKey_test_901b25db-4e80-443f-b8b9-1cc75591a166'

service = APIService(token=API_TOKEN,publishable_key=API_PUBLISHABLE_KEY,test=True)

create_order = service.collect.mpesa_stk_push(phone_number='25472000000',email='topumeghana@gmail.com',amount=100,narrative='Purchase of items')

print(create_order)