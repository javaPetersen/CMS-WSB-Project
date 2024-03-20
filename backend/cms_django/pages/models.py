from mongoengine import DynamicDocument, StringField

# Create your models here.
class Page(DynamicDocument):
    component_id: StringField(required=True, max_length=200)