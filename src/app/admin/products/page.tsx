// src/app/admin/products/page.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AdminProductsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Adicionar Novo Produto
        </h1>

        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Nome do Produto</Label>
            <Input id="name" type="text" placeholder="Ex: X-Burger Especial" />
          </div>

          <div>
            <Label htmlFor="price">Preço</Label>
            <Input id="price" type="number" placeholder="Ex: 25.50" />
          </div>

          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Pão, hambúrguer de 180g, queijo cheddar, bacon..."
            />
          </div>

          <div>
            <Label htmlFor="imageUrl">URL da Imagem</Label>
            <Input
              id="imageUrl"
              type="text"
              placeholder="https://exemplo.com/imagem.png"
            />
          </div>

          <Button type="submit" className="w-full">
            Salvar Produto
          </Button>
        </form>
      </div>
    </div>
  );
}
