from mongoengine import *
from django.conf import settings


def init_mongoengine():
    try:
        connect(
            db=settings.MONGODB_CONF['host'],
            port=settings.MONGODB_CONF['port'],
            username=settings.MONGODB_CONF['username'],
            password=settings.MONGODB_CONF['password']
        )
        print('MongoDB client connected!')
    except Exception as e:
        print("MongoDB not connected: ", e)

init_mongoengine()